import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Clock, IndianRupee } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Reviews from "@/components/Reviews";
import { services as defaultServices, site as defaultSite } from "@/lib/site";
import { getServices, getSiteSettings } from "@/lib/content";
import type { Metadata } from "next";

export function generateStaticParams() {
  return defaultServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const services = await getServices();
  const site = await getSiteSettings();
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Not found" };
  return {
    title: `${service.name} in Durgapura, Jaipur — ${site.name}`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const services = await getServices();
  const site = await getSiteSettings();
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header site={site} />
      <main className="pb-24 lg:pb-0">
        {/* Hero */}
        <section className="paper pt-28 sm:pt-32 lg:pt-40 pb-16">
          <div className="container">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> All treatments
            </Link>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <div className="eyebrow mb-5">{service.short}</div>
                <h1 className="font-bold text-display-lg text-ink">
                  {service.name}
                </h1>
                <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-xl">
                  {service.longDescription}
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/#book" className="btn-primary">
                    Book a consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={site.phoneHref} className="btn-secondary">
                    Call {site.phone}
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="card p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <Stat
                      icon={Clock}
                      label="Typical duration"
                      value={service.duration}
                    />
                    <Stat
                      icon={IndianRupee}
                      label="Starting price"
                      value={service.startingPrice}
                    />
                  </div>
                  <div className="mt-6 pt-6 border-t border-line">
                    <div className="text-xs uppercase tracking-widest text-ink-muted mb-3">
                      What's included
                    </div>
                    <ul className="space-y-2.5">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2.5 text-ink-soft text-sm"
                        >
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                            <Check className="h-3 w-3" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="eyebrow mb-4">Good to know</div>
                <h2 className="font-bold text-display-md text-ink">
                  Questions we hear about {service.name.toLowerCase()}.
                </h2>
              </div>
              <div className="lg:col-span-7 divide-y divide-line border-y border-line">
                {service.faqs.map((f, i) => (
                  <div key={i} className="py-7">
                    <h3 className="font-bold text-xl text-ink">{f.q}</h3>
                    <p className="mt-3 text-ink-soft leading-relaxed max-w-xl">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Reviews />

        {/* Related */}
        <section className="section">
          <div className="container">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 className="font-bold text-display-md text-ink">
                You might also need
              </h2>
              <Link
                href="/#services"
                className="text-sm text-ink-muted hover:text-ink"
              >
                See all treatments →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-2xl border border-line bg-white/60 p-6 hover:shadow-card transition"
                >
                  <div className="text-xs text-ink-muted">{s.short}</div>
                  <h3 className="mt-3 font-bold text-xl text-ink">
                    {s.name}
                  </h3>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-ink-muted">From {s.startingPrice}</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream-50 transition-transform group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer services={services} site={site} />
      <MobileCTA site={site} />
    </>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-600 mb-3">
        <Icon className="h-4 w-4" />
      </div>
      <div className="text-xs uppercase tracking-widest text-ink-muted">
        {label}
      </div>
      <div className="mt-1 font-bold text-2xl text-ink">{value}</div>
    </div>
  );
}
