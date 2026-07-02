"use client";

import { site } from "@/lib/site";

const items = [
  "Painless protocol",
  "Single-sitting RCT",
  "Braces & clear aligners",
  "Rated 4.9 on Google",
  "Modern sterilisation",
  "EMI options available",
  "Damon fast braces",
  "Family friendly",
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
