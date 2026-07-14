/**
 * CONTENT LAYER
 * --------------------------------------------------------------------------
 * Fetches editable content from Sanity CMS. If a piece of content hasn't
 * been entered in the Studio yet, we fall back to the defaults in
 * lib/site.ts so the site never breaks or shows blank sections.
 *
 * The client (Dr Chopra) edits everything through the Sanity Studio
 * dashboard — no code changes needed for text, photos, prices, reviews etc.
 */
import { sanityClient, urlFor } from "./sanity";
import {
  site as defaultSite,
  services as defaultServices,
  faqs as defaultFaqs,
  patientPhotos as defaultPatientPhotos,
  beforeAfterCases as defaultBeforeAfterCases,
  videoTestimonials as defaultVideoTestimonials,
  type Service,
  type PatientPhoto,
  type BeforeAfterCase,
  type VideoTestimonial,
} from "./site";

// Revalidate cached content every 60s, and instantly on webhook (see
// app/api/revalidate/route.ts).
export const CONTENT_REVALIDATE_SECONDS = 60;

type Review = {
  name: string;
  location: string;
  rating: number;
  text: string;
  treatment: string;
};

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  try {
    const result = await sanityClient.fetch(query, {}, {
      next: { revalidate: CONTENT_REVALIDATE_SECONDS },
    });
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings() {
  const settings = await safeFetch<Record<string, unknown> | null>(
    `*[_type == "siteSettings"][0]`,
    null,
  );
  if (!settings) {
    return { ...defaultSite, doctorPhotoUrl: "/doctor-portrait.png" };
  }

  return {
    ...defaultSite,
    name: (settings.name as string) || defaultSite.name,
    tagline: (settings.tagline as string) || defaultSite.tagline,
    phone: (settings.phone as string) || defaultSite.phone,
    phoneHref: (settings.phoneHref as string) || defaultSite.phoneHref,
    whatsapp: (settings.whatsapp as string) || defaultSite.whatsapp,
    email: (settings.email as string) || defaultSite.email,
    address: (settings.address as string) || defaultSite.address,
    hours: (settings.hours as string) || defaultSite.hours,
    rating: (settings.rating as number) ?? defaultSite.rating,
    reviewCount: (settings.reviewCount as number) ?? defaultSite.reviewCount,
    googleMapsLink:
      (settings.googleMapsLink as string) || defaultSite.googleMapsLink,
    doctorPhotoUrl: settings.doctorPhoto
      ? urlFor(settings.doctorPhoto).width(900).url()
      : "/doctor-portrait.png",
  };
}

export async function getServices(): Promise<
  (Service & { imageUrl?: string })[]
> {
  const items = await safeFetch<
    Array<Record<string, unknown>> | null
  >(
    `*[_type == "service"] | order(order asc)`,
    null,
  );
  if (!items || items.length === 0) return defaultServices;

  return items.map((s) => ({
    slug: (s.slug as { current: string })?.current || "",
    name: (s.name as string) || "",
    short: (s.short as string) || "",
    description: (s.description as string) || "",
    longDescription: (s.longDescription as string) || "",
    duration: (s.duration as string) || "",
    startingPrice: (s.startingPrice as string) || "",
    highlights: (s.highlights as string[]) || [],
    faqs: (s.faqs as { q: string; a: string }[]) || [],
    imageUrl: s.image ? urlFor(s.image).width(800).url() : undefined,
  }));
}

export async function getReviews(): Promise<Review[]> {
  const items = await safeFetch<Array<Record<string, unknown>> | null>(
    `*[_type == "review"] | order(order asc)`,
    null,
  );
  if (!items || items.length === 0) {
    // No hardcoded reviews export exists; Reviews.tsx has its own defaults.
    return [];
  }
  return items.map((r) => ({
    name: (r.name as string) || "",
    location: (r.location as string) || "",
    rating: (r.rating as number) || 5,
    text: (r.text as string) || "",
    treatment: (r.treatment as string) || "",
  }));
}

export async function getPatientPhotos(): Promise<PatientPhoto[]> {
  const items = await safeFetch<Array<Record<string, unknown>> | null>(
    `*[_type == "patientPhoto"] | order(order asc)`,
    null,
  );
  if (!items || items.length === 0) return defaultPatientPhotos;

  return items.map((p, i) => ({
    id: (p._id as string) || `p${i}`,
    src: p.photo ? urlFor(p.photo).width(700).url() : "",
    alt: (p.alt as string) || "Happy patient",
    span: "normal" as const,
  }));
}

export async function getBeforeAfterCases(): Promise<BeforeAfterCase[]> {
  const items = await safeFetch<Array<Record<string, unknown>> | null>(
    `*[_type == "beforeAfterCase"] | order(order asc)`,
    null,
  );
  if (!items || items.length === 0) return defaultBeforeAfterCases;

  return items.map((c, i) => ({
    id: (c._id as string) || `c${i}`,
    title: (c.title as string) || "",
    treatment: (c.treatment as string) || "",
    before: c.before ? urlFor(c.before).width(800).url() : "",
    after: c.after ? urlFor(c.after).width(800).url() : "",
    illustrative: Boolean(c.illustrative),
  }));
}

export async function getVideoTestimonials(): Promise<VideoTestimonial[]> {
  const items = await safeFetch<Array<Record<string, unknown>> | null>(
    `*[_type == "videoTestimonial"] | order(order asc){
      ..., "videoUrl": video.asset->url, "posterImg": poster
    }`,
    null,
  );
  if (!items || items.length === 0) return defaultVideoTestimonials;

  return items.map((v, i) => ({
    id: (v._id as string) || `v${i}`,
    name: (v.name as string) || "",
    location: (v.location as string) || "",
    treatment: (v.treatment as string) || "",
    quote: (v.quote as string) || "",
    src: (v.videoUrl as string) || "",
    poster: v.posterImg ? urlFor(v.posterImg).width(800).url() : "",
  }));
}

export async function getFaqs(): Promise<{ q: string; a: string }[]> {
  const items = await safeFetch<Array<Record<string, unknown>> | null>(
    `*[_type == "faq"] | order(order asc)`,
    null,
  );
  if (!items || items.length === 0) return defaultFaqs;

  return items.map((f) => ({
    q: (f.question as string) || "",
    a: (f.answer as string) || "",
  }));
}
