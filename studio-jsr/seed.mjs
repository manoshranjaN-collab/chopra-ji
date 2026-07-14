/**
 * One-time seed script: imports all the existing hardcoded website content
 * (services, reviews, FAQs, patient photos, before/after cases, video
 * testimonial, clinic info) into Sanity as real, editable documents.
 *
 * Run with:  npx sanity exec seed.mjs --with-user-token
 *
 * Safe to re-run — it checks for existing documents by a stable key
 * (e.g. slug, or question text) and skips ones that already exist, so it
 * won't create duplicates alongside anything the client already added.
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-01-01" });

const services = [
  {
    slug: "braces-orthodontics",
    name: "Braces & Orthodontics",
    short: "Damon, metal, ceramic & aligners",
    description:
      "Straighten crooked teeth, close gaps and fix your bite with personalised orthodontic treatment for every age.",
    longDescription:
      "Braces do more than straighten teeth — they improve oral health, chewing, facial aesthetics and confidence. We offer Damon (fast) braces, metal braces, ceramic braces and clear aligners, with a treatment plan built around your smile and lifestyle.",
    duration: "12–24 months",
    startingPrice: "₹25,000",
    highlights: [
      "Damon (fast) braces",
      "Metal & ceramic braces",
      "Clear aligners",
      "Correct gaps, crowding & bite",
    ],
    faqs: [
      {
        q: "Which type of braces is right for me?",
        a: "It depends on your case, budget and how discreet you want treatment to be. At your consultation we assess your teeth and walk you through Damon, metal, ceramic and aligner options.",
      },
      {
        q: "How long does treatment take?",
        a: "Most cases finish in 12–24 months. Damon (fast) braces and mild aligner cases can be quicker. We give you a realistic timeline up front.",
      },
    ],
    order: 0,
  },
  {
    slug: "root-canal",
    name: "Painless Root Canal",
    short: "Single-sitting, microscope-assisted",
    description:
      "Save your natural tooth with a comfortable, single-sitting root canal — most patients are back to work the same day.",
    longDescription:
      "We use rotary endodontics and a surgical microscope so the procedure is precise, quiet and remarkably comfortable. Most root canals are completed in a single sitting of 45–60 minutes, with a same-day temporary crown.",
    duration: "45–60 min",
    startingPrice: "₹3,500",
    highlights: [
      "Single-sitting available",
      "Microscope-assisted precision",
      "Same-day crown options",
      "EMI from ₹600/mo",
    ],
    faqs: [
      {
        q: "Will it hurt?",
        a: "No. Modern anaesthesia and rotary instruments make a root canal feel like a long filling. Most patients describe it as boring rather than painful.",
      },
      {
        q: "How long does it last?",
        a: "A well-done root canal followed by a crown can last 20+ years. We back our work with a 5-year warranty on the crown.",
      },
    ],
    order: 1,
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "Replace missing teeth, permanently",
    description:
      "Titanium implants that look, feel and bite like the real thing — placed by our in-house implantologist using a guided protocol.",
    longDescription:
      "Whether you're missing one tooth or several, implants are the gold-standard replacement. We use Nobel Biocare and Straumann systems and a digital guided protocol, so placement is accurate and predictable.",
    duration: "60 min placement",
    startingPrice: "₹28,000",
    highlights: [
      "Nobel Biocare / Straumann",
      "Guided placement",
      "Lifetime implant warranty",
      "Bone grafting on-site",
    ],
    faqs: [
      {
        q: "How long is the full process?",
        a: "Placement takes about an hour. The implant then heals for 3–4 months before the final crown is attached. Some cases qualify for same-day teeth.",
      },
      {
        q: "Am I a candidate?",
        a: "Most healthy adults are. We do a free 3D CBCT scan at consultation to confirm bone volume and plan precisely.",
      },
    ],
    order: 2,
  },
  {
    slug: "invisible-aligners",
    name: "Invisible Aligners",
    short: "Straighten without the metal",
    description:
      "Clear, removable aligners that gently straighten your teeth — from mild crowding to full-arch correction.",
    longDescription:
      "We're a certified Invisalign and ClearCorrect provider. Treatment is planned in 3D so you see your final smile before you start. Most cases finish in 6–14 months.",
    duration: "6–14 months",
    startingPrice: "₹85,000",
    highlights: [
      "Invisalign certified",
      "3D smile preview",
      "Remote check-ins",
      "Retainers included",
    ],
    faqs: [
      {
        q: "How often do I visit?",
        a: "Once every 6–8 weeks. Between visits, you can send photos through our app for a remote check-in.",
      },
      {
        q: "Will people notice?",
        a: "Aligners are nearly invisible. Most people only realise once you tell them.",
      },
    ],
    order: 3,
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    short: "Veneers, whitening & shaping",
    description:
      "A bespoke combination of veneers, whitening and gum sculpting designed around your face.",
    longDescription:
      "Every smile makeover starts with a Digital Smile Design session — we mock up your new smile on screen and on your teeth before we touch enamel. The result is conservative, natural and made for your features.",
    duration: "2–3 visits",
    startingPrice: "₹12,000 / tooth",
    highlights: [
      "Digital Smile Design",
      "E.max & zirconia veneers",
      "Conservative prep",
      "Mock-up before you commit",
    ],
    faqs: [
      {
        q: "Are veneers permanent?",
        a: "Yes — a small layer of enamel is reshaped to fit the veneer. We use the most conservative prep possible, often under 0.5mm.",
      },
      {
        q: "How long do they last?",
        a: "10–15 years with good care. We provide a night-guard to protect them.",
      },
    ],
    order: 4,
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Several shades brighter in one visit",
    description:
      "Safe, in-office whitening that lifts coffee, tea and tobacco stains in 60 minutes.",
    longDescription:
      "Our whitening uses pH-balanced hydrogen peroxide gel and an LED accelerator. The result is several shades brighter, with minimal sensitivity. Take-home kits are also available.",
    duration: "60 min",
    startingPrice: "₹6,500",
    highlights: [
      "Zoom! LED whitening",
      "Low sensitivity formula",
      "Take-home kits",
      "Touch-up plan",
    ],
    faqs: [
      {
        q: "Does it damage enamel?",
        a: "No. The gel only opens micro-pores temporarily to lift stain. Enamel is unaffected.",
      },
      {
        q: "How long does it last?",
        a: "12–18 months for most people. Avoid coffee for 48 hours after.",
      },
    ],
    order: 5,
  },
  {
    slug: "kids-dentistry",
    name: "Kids Dentistry",
    short: "Gentle visits, happy patients",
    description:
      "A dedicated kids' room, friendly team, and a 'tell-show-do' approach that turns nervous first visits into fun ones.",
    longDescription:
      "From the first tooth to early orthodontic guidance, we look after little smiles. Our paediatric specialist uses nitrous (laughing gas) for anxious kids, and we have a tablet on every chair.",
    duration: "30 min",
    startingPrice: "₹500",
    highlights: [
      "Paediatric specialist",
      "Nitrous for anxious kids",
      "Sealants & fluoride",
      "Early orthodontic screening",
    ],
    faqs: [
      {
        q: "When should my child first visit?",
        a: "By their first birthday, or within 6 months of the first tooth — whichever comes first.",
      },
      {
        q: "Do you treat special-needs children?",
        a: "Yes. We block extra time and adapt the environment. Please mention it when booking.",
      },
    ],
    order: 6,
  },
];

const faqs = [
  {
    question: "Do you take walk-ins?",
    answer:
      "We do, but Jaipur traffic being what it is, we'd rather you call ahead so we can have a chair waiting and skip the wait.",
    order: 0,
  },
  {
    question: "How do I pay?",
    answer:
      "UPI, cards, cash, and no-cost EMI through Bajaj Finserv on treatments above ₹10,000. Insurance reimbursements supported.",
    order: 1,
  },
  {
    question: "Is the clinic sterilised between patients?",
    answer:
      "Every instrument is autoclaved, every chair is wiped down, and we run a Class B steriliser with weekly spore testing. Same protocol we'd want for our own family.",
    order: 2,
  },
  {
    question: "I'm scared of the dentist. Can you help?",
    answer:
      "Yes — this is one of the most common things we hear. We offer nitrous oxide (laughing gas), oral sedation, and a no-judgement consultation where we just talk through the plan.",
    order: 3,
  },
  {
    question: "Do you treat children?",
    answer:
      "We have a dedicated paediatric specialist and a kids' room with tablets and a treasure chest. First visits are usually quick and fun.",
    order: 4,
  },
  {
    question: "What about emergencies after hours?",
    answer:
      "Call our main number — it forwards to the on-call dentist after 9pm. Most pain issues can be triaged on the phone and seen first thing in the morning.",
    order: 5,
  },
];

const reviews = [
  {
    name: "Priyanshi Vijay",
    location: "Local Guide · Jaipur",
    rating: 5,
    text: "I had severe wisdom tooth pain that wouldn't go away. Dr Chopra suggested a minor surgery to remove it. I was very scared before the procedure, but the whole team put me at ease. Highly recommend.",
    treatment: "Wisdom tooth surgery",
    order: 0,
  },
  {
    name: "Vandana Sharma",
    location: "Jaipur",
    rating: 5,
    text: "I am fortunate to be treated by such a doctor. I've been going to him for eight years. He finds more joy in giving his patients comfort than in making money. A very good doctor.",
    treatment: "Long-term care",
    order: 1,
  },
  {
    name: "V S Gupta",
    location: "Jaipur",
    rating: 5,
    text: "Fully satisfied with my root canal and crown treatment. He is humble and patient-friendly, and the charges are quite reasonable. Highly recommended.",
    treatment: "Root canal & crown",
    order: 2,
  },
  {
    name: "A happy patient",
    location: "Durgapura, Jaipur",
    rating: 5,
    text: "Perfect treatment. Friendly and homely environment, clean and hygienic. Thank you to the whole team.",
    treatment: "General dentistry",
    order: 3,
  },
  {
    name: "Verified patient",
    location: "Jaipur",
    rating: 5,
    text: "Excellent service and the best facility in town. After my implant I've never faced any problem. Really happy with the results.",
    treatment: "Implants",
    order: 4,
  },
  {
    name: "Orthodontic patient",
    location: "Jaipur",
    rating: 5,
    text: "Got my braces done here and my smile has completely changed. The team explained every step and treatment stayed on schedule. Confident smile at last.",
    treatment: "Braces",
    order: 5,
  },
];

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  name: "Dr Chopra Dental Clinic",
  tagline: "Straight teeth. Confident smile. Brighter future.",
  phone: "098281 53307",
  phoneHref: "tel:+919828153307",
  whatsapp: "https://wa.me/919828153307",
  email: "info@drchopradentalclinic.in",
  address:
    "4A, Green Nagar, Dalda Factory Road, Near St Paul School, Vasundra Colony, Durgapura, Jaipur, Rajasthan 302018",
  hours: "Mon–Sat · Closes 8:30pm",
  rating: 4.9,
  reviewCount: 429,
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=Dr+Chopra+Dental+Clinic+Durgapura+Jaipur",
};

async function upsertByQuery(type, query, params, doc) {
  const existing = await client.fetch(query, params);
  if (existing) {
    console.log(`skip (exists): ${type} ${JSON.stringify(params)}`);
    return existing._id;
  }
  const created = await client.create({ _type: type, ...doc });
  console.log(`created: ${type} ${created._id}`);
  return created._id;
}

async function main() {
  // 1. Clinic info (singleton, fixed _id so there's only ever one)
  await client.createIfNotExists(siteSettings);
  console.log("siteSettings ensured");

  // 2. Services
  for (const s of services) {
    await upsertByQuery(
      "service",
      `*[_type == "service" && slug.current == $slug][0]`,
      { slug: s.slug },
      { ...s, slug: { _type: "slug", current: s.slug } },
    );
  }

  // 3. FAQs
  for (const f of faqs) {
    await upsertByQuery(
      "faq",
      `*[_type == "faq" && question == $question][0]`,
      { question: f.question },
      f,
    );
  }

  // 4. Reviews
  for (const r of reviews) {
    await upsertByQuery(
      "review",
      `*[_type == "review" && name == $name && treatment == $treatment][0]`,
      { name: r.name, treatment: r.treatment },
      r,
    );
  }

  console.log("\nSeed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
