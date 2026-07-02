"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { beforeAfterCases } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="eyebrow mb-4">Before · After</div>
            <h2 className="font-bold text-display-lg text-ink">
              Real smiles.
              <br />
              <span className="accent text-teal-600">Real</span> patients.
            </h2>
          </div>
          <p className="md:max-w-sm text-ink-muted">
            Drag the handle across each photo to reveal the result. Every case
            shown here is shared with the patient&rsquo;s written permission.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beforeAfterCases.map((c) => (
            <BeforeAfter key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({
  title,
  treatment,
  before,
  after,
}: {
  title: string;
  treatment: string;
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onDown = (clientX: number) => {
    dragging.current = true;
    setFromClientX(clientX);
  };
  const onMove = (clientX: number) => {
    if (dragging.current) setFromClientX(clientX);
  };
  const stop = () => {
    dragging.current = false;
  };

  return (
    <figure className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-100 shadow-card select-none cursor-ew-resize"
        onMouseDown={(e) => onDown(e.clientX)}
        onMouseMove={(e) => onMove(e.clientX)}
        onMouseUp={stop}
        onMouseLeave={stop}
        onTouchStart={(e) => onDown(e.touches[0].clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
        onTouchEnd={stop}
        role="slider"
        aria-label={`${title} before and after comparison`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
        }}
      >
        {/* After (full, underneath) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={after}
          alt={`${title} after`}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Before (clipped to the slider position, stays full-width) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={before}
            alt={`${title} before`}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute top-4 left-4 chip border-transparent bg-cream-50 text-ink">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 chip border-transparent bg-gold-400 text-ink">
          After
        </span>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-0.5 bg-cream-50/90 shadow-[0_0_0_1px_rgba(14,42,42,0.15)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 text-teal-700 shadow-cardLg">
            <ChevronsLeftRight className="h-5 w-5" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent" />
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="font-bold text-lg text-ink">{title}</span>
        <span className="text-sm text-ink-muted">{treatment}</span>
      </figcaption>
    </figure>
  );
}
