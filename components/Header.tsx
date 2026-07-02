"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import clsx from "clsx";

const nav = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Stories", href: "/#stories" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream-50/85 backdrop-blur-md border-b border-line"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <div className="hidden sm:block">
            <div className="font-bold text-lg leading-none text-ink tracking-tight">
              Dr Chopra Dental Clinic
            </div>
            <div className="text-xs text-ink-muted mt-1">
              Dental Clinic · Durgapura, Jaipur
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-tight text-ink-soft hover:text-teal-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-ink hover:text-teal-600 transition-colors"
            aria-label={`Call ${site.phone}`}
          >
            <Phone className="h-4 w-4" />
            <span>{site.phone}</span>
          </a>
          <Link href="/#book" className="btn-primary hidden sm:inline-flex">
            Book a visit
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-cream-50">
          <div className="container py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-semibold tracking-tight text-ink-soft hover:text-teal-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#book"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 self-start"
            >
              Book a visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-cream-50 font-bold text-base shadow-card"
    >
      C
    </span>
  );
}
