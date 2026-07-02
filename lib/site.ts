export const site = {
  name: "Dr Lipsa's Dental Clinic",
  short: "Dr Lipsa Dental",
  dentist: "Dr Lipsa Wadhwani",
  tagline: "Marol & Powai's most loved family dentist.",
  phone: "099302 29689",
  phoneHref: "tel:+919930229689",
  whatsapp: "https://wa.me/919930229689",
  // TODO: confirm — email is not listed on Google. Replace or remove.
  email: "hello@drlipsadental.in",
  address:
    "Shop No. 19, Tara Srishti CHS, 7 Saki Vihar Rd, opposite L&T Flyover, beside Jio, Marol, Powai, Mumbai, Maharashtra 400072",
  shortAddress: "Saki Vihar Rd, Marol, Powai, Mumbai 400072",
  // TODO: confirm full weekly hours. Google shows "Opens 10 am Mon"; closing time unverified.
  hours: "Mon–Sat · Opens 10:00am",
  rating: 5.0,
  reviewCount: 555,
  // Embedded map centred on the clinic's exact coordinates (Marol/Powai, Mumbai)
  googleMaps:
    "https://www.google.com/maps?q=19.1219575,72.8911945&z=16&output=embed",
  // Direct link to the clinic's Google Maps listing
  googleMapsLink:
    "https://www.google.com/maps/place/Dr+Lipsa%E2%80%99s+Dental+Clinic+%7C+Dr+Lipsa+Wadhwani/@19.1219575,72.8911945,821m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c9ee5cdc2d87:0x95bdccb8e78a2b9f!8m2!3d19.1219575!4d72.8911945!16s%2Fg%2F11v9_lsrxj",
  // Notable Google attributes
  attributes: ["LGBTQ+ friendly", "Women-owned"],
  social: {
    // TODO: confirm the exact Instagram handle (Google lists an Instagram link).
    instagram: "https://instagram.com/",
    facebook: "",
    youtube: "",
  },
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  longDescription: string;
  duration: string;
  startingPrice: string;
  highlights: string[];
  faqs: { q: string; a: string }[];
};

/**
 * VIDEO TESTIMONIALS
 * --------------------------------------------------------------------------
 * Portrait (9:16) patient clips. Drop video files into /public/videos and a
 * still frame (poster) into /public/posters, then point each entry below.
 *
 *   src    -> "/videos/lipsa-testimonial.mp4"  (leave "" for a placeholder)
 *   poster -> "/posters/lipsa-testimonial.jpg" (still shown before play)
 */
export type VideoTestimonial = {
  id: string;
  name: string;
  location: string;
  treatment: string;
  quote: string;
  src: string;
  poster: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "A patient's note",
    location: "Marol, Powai",
    treatment: "Dental care",
    quote:
      "When someone who has seen the world chooses our clinic for their dental care, it speaks volumes.",
    src: "/videos/lipsa-testimonial.mp4",
    poster: "/posters/lipsa-testimonial.jpg",
  },
];

/**
 * HAPPY PATIENTS COLLAGE
 * --------------------------------------------------------------------------
 * Drop real patient photos into  /public/patients  and point each entry at
 * them, e.g.  src: "/patients/01.png".  Leave src "" for an empty placeholder.
 * `span` controls how large the tile is in the collage grid.
 */
export type PatientPhoto = {
  id: string;
  src: string;
  alt: string;
  span: "tall" | "wide" | "normal";
};

export const patientPhotos: PatientPhoto[] = [
  { id: "p1", src: "/patients/01.png", alt: "Happy patient at Dr Lipsa's clinic", span: "normal" },
  { id: "p2", src: "/patients/02.png", alt: "Patient after treatment", span: "normal" },
  { id: "p3", src: "/patients/03.png", alt: "Patient with Dr Lipsa", span: "normal" },
  { id: "p4", src: "/patients/04.png", alt: "Happy patient portrait", span: "normal" },
];

/**
 * BEFORE / AFTER CASES
 * --------------------------------------------------------------------------
 * Drop real clinical photos into /public/cases and point each entry at them.
 * Use matching framing (same angle, crop and lighting) for before & after so
 * the drag-slider lines up cleanly.
 *
 *   before -> "/cases/case1-before.jpg"
 *   after  -> "/cases/case1-after.jpg"
 *
 * Leave the placeholder paths to show the neutral "Add a real photo" tiles.
 * IMPORTANT: only use genuine patient photos shared with written consent.
 */
export type BeforeAfterCase = {
  id: string;
  title: string;
  treatment: string;
  before: string;
  after: string;
};

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "c1",
    title: "Smile makeover",
    treatment: "Veneers",
    before: "/cases/placeholder-before.svg",
    after: "/cases/placeholder-after.svg",
  },
  {
    id: "c2",
    title: "Full-mouth rehab",
    treatment: "Implants",
    before: "/cases/placeholder-before.svg",
    after: "/cases/placeholder-after.svg",
  },
  {
    id: "c3",
    title: "Aligner treatment",
    treatment: "Invisible aligners",
    before: "/cases/placeholder-before.svg",
    after: "/cases/placeholder-after.svg",
  },
];

export const services: Service[] = [
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
  },
];

export const faqs = [
  {
    q: "Do you take walk-ins?",
    a: "We do, but Mumbai traffic being what it is, we'd rather you call ahead so we can have a chair waiting and skip the wait.",
  },
  {
    q: "How do I pay?",
    a: "UPI, cards, cash, and no-cost EMI through Bajaj Finserv on treatments above ₹10,000. Insurance reimbursements supported.",
  },
  {
    q: "Is the clinic sterilised between patients?",
    a: "Every instrument is autoclaved, every chair is wiped down, and we run a Class B steriliser with weekly spore testing. Same protocol we'd want for our own family.",
  },
  {
    q: "I'm scared of the dentist. Can you help?",
    a: "Yes — this is one of the most common things we hear. We offer nitrous oxide (laughing gas), oral sedation, and a no-judgement consultation where we just talk through the plan.",
  },
  {
    q: "Do you treat children?",
    a: "We have a dedicated paediatric specialist and a kids' room with tablets and a treasure chest. First visits are usually quick and fun.",
  },
  {
    q: "What about emergencies after hours?",
    a: "Call our main number — it forwards to the on-call dentist after 9pm. Most pain issues can be triaged on the phone and seen first thing in the morning.",
  },
];
