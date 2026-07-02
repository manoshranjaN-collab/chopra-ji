import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const details = [
  {
    icon: MapPin,
    label: "Visit",
    value: site.address,
    href: site.googleMapsLink,
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
  },
  {
    icon: Phone,
    label: "Call",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Find us</div>
            <h2 className="font-bold text-display-lg text-ink">
              On Saki Vihar Road,
              <br />
              in <span className="accent text-teal-600">Marol</span>.
            </h2>
            <p className="mt-6 text-ink-muted max-w-md">
              Opposite the L&amp;T Flyover and right beside Jio — minutes from
              Powai and Saki Naka. Step-free entrance and a wheelchair-accessible
              chair.
            </p>

            <div className="mt-8 space-y-1">
              {details.map((d) => (
                <a
                  key={d.label}
                  href={d.href ?? "#"}
                  className="flex items-start gap-4 py-4 border-b border-line group"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-ink-muted">
                      {d.label}
                    </div>
                    <div className="mt-1 text-ink group-hover:text-teal-600 transition-colors">
                      {d.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-line shadow-card aspect-[4/3] lg:aspect-[5/4] bg-cream-100">
              <iframe
                src={site.googleMaps}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Dr Lipsa's Dental Clinic"
                className="block h-full w-full grayscale-[0.2] contrast-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
