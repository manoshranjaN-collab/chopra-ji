"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section bg-cream-100/60 hairline border-y">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Things people ask</div>
            <h2 className="font-bold text-display-lg text-ink">
              Honest answers,
              <br />
              no <span className="accent">jargon</span>.
            </h2>
            <p className="mt-6 text-ink-muted max-w-sm">
              Still stuck? Send us a Whatsapp — the front desk reads everything
              between patients.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-xl text-ink leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-all ${
                        isOpen
                          ? "bg-teal-600 text-cream-50 border-teal-600 rotate-180"
                          : "bg-white/60 text-ink"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-soft leading-relaxed max-w-xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
