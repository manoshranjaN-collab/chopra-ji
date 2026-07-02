import { Quote, Star } from "lucide-react";
import { site } from "@/lib/site";

const reviews = [
  {
    name: "Aniket M.",
    location: "Powai",
    rating: 5,
    text: "Got my root canal done in a single sitting. Did not feel a thing. The team explained every step. Best clinic in the Marol–Powai area by a mile.",
    treatment: "Root canal",
  },
  {
    name: "Sneha P.",
    location: "Andheri East",
    rating: 5,
    text: "I came in for a smile makeover before my wedding. Dr Lipsa designed it on a screen first so I could see the result. My photos look unreal.",
    treatment: "Smile makeover",
  },
  {
    name: "Rakesh B.",
    location: "Saki Naka",
    rating: 5,
    text: "Had three implants placed last year. Eating apples again. The clinic followed up every week — felt like family more than a hospital.",
    treatment: "Implants",
  },
  {
    name: "Ananya D.",
    location: "Ghatkopar",
    rating: 5,
    text: "My son used to cry at every dentist visit. Now he asks when we are going back. The kids room is a small miracle.",
    treatment: "Kids dentistry",
  },
  {
    name: "Mihir K.",
    location: "Vikhroli",
    rating: 5,
    text: "Aligners done. Took 9 months. The check-ins over WhatsApp were so easy — I barely had to take time off work.",
    treatment: "Invisalign",
  },
  {
    name: "Smruti R.",
    location: "Marol",
    rating: 5,
    text: "Whitening session before a wedding shoot. Three shades brighter, zero sensitivity. I keep recommending this place.",
    treatment: "Whitening",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section bg-cream-100/70 hairline border-y">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">Word of mouth</div>
            <h2 className="font-bold text-display-lg text-ink">
              Rated <span className="accent">5.0</span> by{" "}
              <span className="text-teal-600">{site.reviewCount}+ </span>
              neighbours
              <br />
              you probably know.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <GoogleMark />
                <div className="leading-tight">
                  <div className="text-sm text-ink-muted">Google reviews</div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-3xl text-ink">
                      {site.rating.toFixed(1)}
                    </span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-muted">
                Based on {site.reviewCount}+ verified reviews. Updated weekly.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  name,
  location,
  rating,
  text,
  treatment,
}: (typeof reviews)[number]) {
  return (
    <article className="relative rounded-2xl bg-white/80 border border-line p-6 shadow-card flex flex-col">
      <Quote className="h-6 w-6 text-gold-400" />
      <p className="mt-4 text-ink-soft leading-relaxed flex-1">"{text}"</p>
      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
        <div>
          <div className="font-medium text-ink text-sm">{name}</div>
          <div className="text-xs text-ink-muted">{location}</div>
        </div>
        <div className="text-right">
          <div className="flex justify-end">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
            ))}
          </div>
          <div className="text-xs text-ink-muted mt-1">{treatment}</div>
        </div>
      </div>
    </article>
  );
}

function GoogleMark() {
  return (
    <span
      aria-hidden
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-line font-bold text-xl"
    >
      <span className="text-[#4285F4]">G</span>
    </span>
  );
}
