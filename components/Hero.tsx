import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="paper relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-20">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6">
              <span>Marol · Powai, Mumbai</span>
            </div>

            <h1 className="font-bold text-display-xl text-ink">
              Dentistry that
              <br />
              feels <span className="accent">gentle</span>,
              <br />
              looks like <span className="accent text-teal-600">art</span>.
            </h1>

            <p className="mt-7 max-w-xl text-lg text-ink-muted leading-relaxed">
              Painless root canals, lifelike implants and digital smile design
              — by Dr Lipsa Wadhwani and a team Mumbai quietly considers its
              best.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#book" className="btn-primary">
                Book a visit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#services" className="btn-secondary">
                Explore treatments
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#C9DCD7", "#E9C77A", "#3F7A6E", "#EDE2CC"].map((c, i) => (
                    <span
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-cream-50"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1 text-ink">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                    <span className="ml-1.5 font-medium">
                      {site.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-xs text-ink-muted">
                    {site.reviewCount}+ Google reviews
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-line hidden sm:block" />

              <div className="text-sm text-ink-muted">
                <span className="text-ink font-medium">12 years</span> of
                family-first dentistry
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      {/* Main image card */}
      <div className="relative rounded-3xl overflow-hidden shadow-cardLg aspect-[4/5] bg-teal-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
          alt="Dr Lipsa with a patient at the clinic"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          <span className="chip bg-cream-50/95 border-transparent">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            By appointment
          </span>
          <span className="chip bg-cream-50/95 border-transparent text-ink">
            Opens 10 am
          </span>
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-cream-50">
          <div className="text-xl leading-snug font-medium">
            &ldquo;She made my 7-year-old{" "}
            <span className="accent">ask</span> for the next visit.&rdquo;
          </div>
          <div className="mt-2 text-sm opacity-80">
            — Ritika S., Powai
          </div>
        </div>
      </div>

      {/* Stat card */}
      <div className="absolute -left-4 sm:-left-8 -bottom-6 card px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gold-300/40 flex items-center justify-center font-bold text-lg text-ink">
            5★
          </div>
          <div className="leading-tight">
            <div className="font-bold text-xl text-ink">555+</div>
            <div className="text-xs uppercase tracking-widest text-ink-muted">
              5-star reviews
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge card */}
      <div className="hidden sm:flex absolute -right-6 top-10 card px-4 py-3 items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-teal-600 text-cream-50 flex items-center justify-center text-xs font-medium">
          ✓
        </div>
        <div className="text-xs leading-tight">
          <div className="text-ink font-medium">Painless protocol</div>
          <div className="text-ink-muted">Sedation available</div>
        </div>
      </div>
    </div>
  );
}
