import { Quote, Star } from "lucide-react";
import { site } from "@/lib/site";

const defaultReviews = [
  {
    name: "Priyanshi Vijay",
    location: "Local Guide · Jaipur",
    rating: 5,
    text: "I had severe wisdom tooth pain that wouldn't go away. Dr Chopra suggested a minor surgery to remove it. I was very scared before the procedure, but the whole team put me at ease. Highly recommend.",
    treatment: "Wisdom tooth surgery",
  },
  {
    name: "Vandana Sharma",
    location: "Jaipur",
    rating: 5,
    text: "I am fortunate to be treated by such a doctor. I've been going to him for eight years. He finds more joy in giving his patients comfort than in making money. A very good doctor.",
    treatment: "Long-term care",
  },
  {
    name: "V S Gupta",
    location: "Jaipur",
    rating: 5,
    text: "Fully satisfied with my root canal and crown treatment. He is humble and patient-friendly, and the charges are quite reasonable. Highly recommended.",
    treatment: "Root canal & crown",
  },
  {
    name: "A happy patient",
    location: "Durgapura, Jaipur",
    rating: 5,
    text: "Perfect treatment. Friendly and homely environment, clean and hygienic. Thank you to the whole team.",
    treatment: "General dentistry",
  },
  {
    name: "Verified patient",
    location: "Jaipur",
    rating: 5,
    text: "Excellent service and the best facility in town. After my implant I've never faced any problem. Really happy with the results.",
    treatment: "Implants",
  },
  {
    name: "Orthodontic patient",
    location: "Jaipur",
    rating: 5,
    text: "Got my braces done here and my smile has completely changed. The team explained every step and treatment stayed on schedule. Confident smile at last.",
    treatment: "Braces",
  },
];

type ReviewItem = (typeof defaultReviews)[number];

export default function Reviews({
  reviews = defaultReviews,
  rating = site.rating,
  reviewCount = site.reviewCount,
}: {
  reviews?: ReviewItem[];
  rating?: number;
  reviewCount?: number;
}) {
  return (
    <section id="reviews" className="section bg-cream-100/70 hairline border-y">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">Word of mouth</div>
            <h2 className="font-bold text-display-lg text-ink">
              Rated <span className="accent">{rating.toFixed(1)}</span> by{" "}
              <span className="text-teal-600">{reviewCount}+ </span>
              patients
              <br />
              across Jaipur.
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
                      {rating.toFixed(1)}
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
                Based on {reviewCount}+ verified reviews. Updated weekly.
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
}: ReviewItem) {
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
