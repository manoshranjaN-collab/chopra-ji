/**
 * One-time media seed: uploads the doctor photo, patient photos,
 * before/after case images, and the video testimonial (+ poster) into
 * Sanity as real assets, and creates/updates the documents that reference
 * them — so the client can edit every image/video from the Studio, not
 * just text.
 *
 * Run with:  npx sanity exec seed-media.mjs --with-user-token
 *
 * Safe to re-run — skips documents that already reference an asset with
 * the same original filename.
 */
import { getCliClient } from "sanity/cli";
import fs from "fs";
import path from "path";

const client = getCliClient({ apiVersion: "2024-01-01" });
const publicDir = path.resolve("../public");

async function uploadImage(relPath) {
  const filePath = path.join(publicDir, relPath);
  const filename = path.basename(relPath);
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, { filename });
  console.log(`uploaded image: ${relPath} -> ${asset._id}`);
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function uploadFile(relPath, contentType) {
  const filePath = path.join(publicDir, relPath);
  const filename = path.basename(relPath);
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload("file", stream, {
    filename,
    contentType,
  });
  console.log(`uploaded file: ${relPath} -> ${asset._id}`);
  return { _type: "file", asset: { _type: "reference", _ref: asset._id } };
}

async function docExistsWithAssetFilename(type, field, filename) {
  const query = `*[_type == $type && ${field}.asset->originalFilename == $filename][0]`;
  return client.fetch(query, { type, filename });
}

async function main() {
  // 1. Doctor photo -> siteSettings.doctorPhoto
  const existingSettings = await client.fetch(
    `*[_type == "siteSettings"][0]{doctorPhoto}`,
  );
  if (!existingSettings?.doctorPhoto) {
    const doctorPhoto = await uploadImage("doctor-portrait.png");
    await client
      .patch("siteSettings")
      .set({ doctorPhoto })
      .commit({ autoGenerateArrayKeys: true });
    console.log("siteSettings.doctorPhoto set");
  } else {
    console.log("skip: siteSettings.doctorPhoto already set");
  }

  // 2. Happy patient photos
  const patientFiles = [
    { file: "patients/01.png", alt: "Happy patient at Dr Chopra Dental Clinic" },
    { file: "patients/02.png", alt: "Patient after treatment" },
    { file: "patients/03.png", alt: "Patient with Dr Chopra" },
    { file: "patients/04.png", alt: "Happy patient portrait" },
  ];
  for (let i = 0; i < patientFiles.length; i++) {
    const { file, alt } = patientFiles[i];
    const filename = path.basename(file);
    const existing = await docExistsWithAssetFilename(
      "patientPhoto",
      "photo",
      filename,
    );
    if (existing) {
      console.log(`skip: patientPhoto ${filename} already exists`);
      continue;
    }
    const photo = await uploadImage(file);
    const created = await client.create({
      _type: "patientPhoto",
      photo,
      alt,
      order: i,
    });
    console.log(`created: patientPhoto ${created._id}`);
  }

  // 3. Before / after cases
  const cases = [
    {
      title: "Smile makeover",
      treatment: "Veneers",
      before: "cases/smile-makeover-before.png",
      after: "cases/smile-makeover-after.png",
      illustrative: false,
      order: 0,
    },
    {
      title: "Full-mouth rehab",
      treatment: "Implants",
      before: "cases/implants-before.png",
      after: "cases/implants-after.png",
      illustrative: true,
      order: 1,
    },
    {
      title: "Aligner treatment",
      treatment: "Invisible aligners",
      before: "cases/aligners-before.png",
      after: "cases/aligners-after.png",
      illustrative: true,
      order: 2,
    },
  ];
  for (const c of cases) {
    const existing = await client.fetch(
      `*[_type == "beforeAfterCase" && title == $title && treatment == $treatment][0]`,
      { title: c.title, treatment: c.treatment },
    );
    if (existing) {
      console.log(`skip: beforeAfterCase "${c.title}" already exists`);
      continue;
    }
    const before = await uploadImage(c.before);
    const after = await uploadImage(c.after);
    const created = await client.create({
      _type: "beforeAfterCase",
      title: c.title,
      treatment: c.treatment,
      before,
      after,
      illustrative: c.illustrative,
      order: c.order,
    });
    console.log(`created: beforeAfterCase ${created._id}`);
  }

  // 4. Video testimonial
  const existingVideo = await client.fetch(
    `*[_type == "videoTestimonial"][0]`,
  );
  if (!existingVideo) {
    const video = await uploadFile("videos/lipsa-testimonial.mp4", "video/mp4");
    const poster = await uploadImage("posters/lipsa-testimonial.jpg");
    const created = await client.create({
      _type: "videoTestimonial",
      name: "A patient's note",
      location: "Durgapura, Jaipur",
      treatment: "Dental care",
      quote:
        "When someone who has seen the world chooses our clinic for their dental care, it speaks volumes.",
      video,
      poster,
      order: 0,
    });
    console.log(`created: videoTestimonial ${created._id}`);
  } else {
    console.log("skip: videoTestimonial already exists");
  }

  console.log("\nMedia seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
