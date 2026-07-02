import { GraduationCap, Heart, Star, Users } from "lucide-react";

// NOTE: Only the rating/reviews are confirmed from the Google listing. The
// qualification line is a placeholder — replace with Dr Chopra's actual
// degrees and affiliations.
const badges = [
  {
    icon: GraduationCap,
    title: "BDS, MDS", // TODO: confirm exact qualifications
    sub: "Dr Chopra",
  },
  {
    icon: Star,
    title: "Rated 4.9",
    sub: "429+ Google reviews",
  },
  {
    icon: Heart,
    title: "Orthodontics",
    sub: "Braces & aligners",
  },
  {
    icon: Users,
    title: "Family friendly",
    sub: "Everyone welcome",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait + signature */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-100 shadow-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/doctor-portrait.png"
                alt="Dr Chopra, founder and lead dentist"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 card px-5 py-4 w-[230px]">
              <div className="text-xs uppercase tracking-widest text-ink-muted">
                Lead dentist
              </div>
              <div className="mt-1 text-2xl font-bold tracking-tight text-ink">
                Dr Chopra
              </div>
              <div className="mt-1 text-sm text-ink-muted">
                BDS, MDS — Orthodontics
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Meet the dentist</div>
            <h2 className="font-bold text-display-lg text-ink">
              Dr Chopra — the dentist
              <br />
              who <span className="accent text-teal-600">listens</span> first.
            </h2>
            <div className="mt-7 space-y-5 text-ink-soft leading-relaxed max-w-xl">
              <p>
                It&rsquo;s the way Dr Chopra practices — slow, careful, without
                rushing through your story — that brings patients back with
                their parents, their children, their colleagues. The 4.9 rating
                across 429+ reviews is really just that, written down.
              </p>
              <p>
                The clinic was built around the belief that dentistry should
                feel less like a procedure and more like a visit. The team
                knows your name, and nothing happens without a plain-language
                explanation first.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white/60 p-4"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink">
                      {b.title}
                    </div>
                    <div className="text-xs text-ink-muted">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
