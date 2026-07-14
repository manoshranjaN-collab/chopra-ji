import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services as defaultServices, type Service } from "@/lib/site";

export default function Services({
  services = defaultServices,
}: {
  services?: Service[];
}) {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Treatments</div>
            <h2 className="font-bold text-display-lg text-ink">
              Calm, considered care for{" "}
              <span className="accent">every</span> chair.
            </h2>
          </div>
          <p className="md:max-w-sm text-ink-muted">
            From your child's first cleaning to a full smile makeover, we plan
            around your face and your life — never the other way around.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const featured = index === 0;
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex flex-col rounded-2xl border border-line p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card ${
        featured ? "bg-teal-600 text-cream-50 border-teal-600" : "bg-white/60"
      }`}
    >
      <div
        className={`text-xs font-mono ${
          featured ? "text-cream-50/60" : "text-ink-muted"
        }`}
      >
        0{index + 1}
      </div>

      <h3
        className={`mt-6 font-bold text-2xl leading-tight ${
          featured ? "text-cream-50" : "text-ink"
        }`}
      >
        {service.name}
      </h3>
      <p
        className={`mt-2 text-sm ${
          featured ? "text-cream-50/80" : "text-ink-muted"
        }`}
      >
        {service.short}
      </p>

      <p
        className={`mt-5 text-sm leading-relaxed ${
          featured ? "text-cream-50/85" : "text-ink-soft"
        }`}
      >
        {service.description}
      </p>

      <div
        className={`mt-6 flex items-center justify-between border-t pt-5 text-xs ${
          featured ? "border-cream-50/15" : "border-line"
        }`}
      >
        <div>
          <div
            className={
              featured ? "text-cream-50/60" : "text-ink-muted"
            }
          >
            From
          </div>
          <div
            className={`font-bold text-lg ${
              featured ? "text-cream-50" : "text-ink"
            }`}
          >
            {service.startingPrice}
          </div>
        </div>
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:rotate-12 ${
            featured
              ? "bg-cream-50 text-teal-600"
              : "bg-ink text-cream-50"
          }`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
