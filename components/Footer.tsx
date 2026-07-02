import Link from "next/link";
import { Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import { services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-cream-50">
      <div className="container py-20 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 text-teal-700 font-bold text-lg">
              L
            </span>
            <span className="font-bold text-2xl">{site.name}</span>
          </Link>
          <p className="mt-6 max-w-md text-cream-50/80 leading-relaxed">
            {site.tagline} Twelve years and 12,000 patients later, we're still
            answering our own phone.
          </p>
          <div className="mt-7 flex gap-3">
            <SocialIcon href={site.social.instagram}>
              <Instagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={site.social.facebook}>
              <Facebook className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href={site.social.youtube}>
              <Youtube className="h-4 w-4" />
            </SocialIcon>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.22em] text-cream-50/50">
            Treatments
          </div>
          <ul className="mt-4 space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.22em] text-cream-50/50">
            Visit
          </div>
          <ul className="mt-4 space-y-3 text-cream-50/80">
            <li>
              <Link href="/#book" className="hover:text-gold-300">
                Book a visit
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-gold-300">
                Directions
              </Link>
            </li>
            <li>
              <Link href="/#reviews" className="hover:text-gold-300">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-gold-300">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.22em] text-cream-50/50">
            Reach us
          </div>
          <ul className="mt-4 space-y-3 text-cream-50/80">
            <li>
              <a href={site.phoneHref} className="hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-gold-300"
              >
                {site.email}
              </a>
            </li>
            <li className="text-sm">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-50/60">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Designed in Mumbai · Crafted with{" "}
            <span className="text-gold-300">care</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/20 hover:bg-cream-50 hover:text-teal-700 transition-colors"
    >
      {children}
    </a>
  );
}
