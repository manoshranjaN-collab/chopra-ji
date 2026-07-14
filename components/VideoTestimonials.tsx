"use client";

import { useRef, useState } from "react";
import { Play, Quote } from "lucide-react";
import {
  site,
  videoTestimonials as defaultVideoTestimonials,
  type VideoTestimonial,
} from "@/lib/site";

export default function VideoTestimonials({
  testimonials = defaultVideoTestimonials,
  instagramUrl = site.social.instagram,
}: {
  testimonials?: VideoTestimonial[];
  instagramUrl?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const v = testimonials[0];
  if (!v) return null;

  const play = () => {
    if (!v.src) return;
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <section id="stories" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait 9:16 player */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-line bg-ink shadow-cardLg">
              {playing ? (
                <video
                  ref={videoRef}
                  src={v.src}
                  poster={v.poster || undefined}
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <button
                  onClick={play}
                  className="group absolute inset-0 h-full w-full"
                  aria-label="Play patient testimonial"
                >
                  {v.poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={v.poster}
                      alt="Patient testimonial still"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-teal-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream-50 text-teal-700 shadow-cardLg transition-transform group-hover:scale-105">
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                  </span>
                  <span className="absolute bottom-4 left-4 right-4 text-cream-50 text-sm font-medium">
                    Tap to play
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Context */}
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Patient stories</div>
            <Quote className="h-8 w-8 text-gold-400" />
            <blockquote className="mt-4 text-2xl sm:text-3xl leading-snug font-medium text-ink max-w-xl">
              When someone who&rsquo;s seen the world chooses our clinic for
              their dental care, it{" "}
              <span className="accent text-teal-600">speaks volumes</span>.
            </blockquote>
            <p className="mt-6 text-ink-muted max-w-lg leading-relaxed">
              A small thank-you from one of our patients. We&rsquo;re grateful
              for every family that trusts us with their smile — and we film
              these only with their blessing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <div className="flex items-center gap-2 text-ink-soft">
                <span className="h-2 w-2 rounded-full bg-teal-500" />
                Filmed at the clinic · {v.location}
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-teal-600 hover:text-teal-700 underline underline-offset-4"
              >
                More on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
