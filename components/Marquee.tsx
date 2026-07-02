"use client";

import { site } from "@/lib/site";

const items = [
  "Painless protocol",
  "Single-sitting RCT",
  "Digital Smile Design",
  "Rated 5.0 on Google",
  "Modern sterilisation",
  "EMI options available",
  "Women-owned",
  "LGBTQ+ friendly",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="hairline border-b bg-cream-100/60">
      <div className="overflow-hidden py-4">
        <div className="flex w-max gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((label, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
