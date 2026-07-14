"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Check, Phone } from "lucide-react";
import { services as defaultServices, site as defaultSite, type Service } from "@/lib/site";

export default function Booking({
  services = defaultServices,
  site = defaultSite,
}: {
  services?: Service[];
  site?: typeof defaultSite;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="book" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Book a visit</div>
            <h2 className="font-bold text-display-lg text-ink">
              Tell us when. We'll
              <br />
              keep a chair{" "}
              <span className="accent text-teal-600">warm</span>.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-md">
              Most appointments are confirmed within 15 minutes. For pain or
              emergencies, ring us — we keep slots aside every day.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={site.phoneHref}
                className="card flex items-center gap-4 p-5 hover:shadow-cardLg transition-shadow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-cream-50">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="text-xs text-ink-muted uppercase tracking-widest">
                    Call directly
                  </div>
                  <div className="font-bold text-xl text-ink">
                    {site.phone}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-muted" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="card flex items-center gap-4 p-5 hover:shadow-cardLg transition-shadow"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-ink">
                  <Calendar className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="text-xs text-ink-muted uppercase tracking-widest">
                    Whatsapp us
                  </div>
                  <div className="font-bold text-xl text-ink">
                    Quick reply, real human
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-muted" />
              </a>
            </div>

            <ul className="mt-8 space-y-2 text-sm text-ink-soft">
              {[
                "Gentle, judgement-free consultations",
                "EMI options available on major treatments",
                `Rated ${site.rating.toFixed(1)} by ${site.reviewCount}+ patients on Google`,
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="card p-7 sm:p-10"
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto h-14 w-14 rounded-full bg-teal-50 flex items-center justify-center">
                    <Check className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="mt-5 font-bold text-2xl text-ink">
                    Got it — we'll call you back.
                  </h3>
                  <p className="mt-2 text-ink-muted">
                    Usually within 15 minutes during clinic hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-7">
                    <h3 className="font-bold text-2xl text-ink">
                      Request an appointment
                    </h3>
                    <span className="chip">No card needed</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name">
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        className="input"
                      />
                    </Field>
                    <Field label="Mobile">
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+91"
                        className="input"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <Field label="Treatment">
                      <select name="service" className="input">
                        <option>Not sure — please advise</option>
                        {services.map((s) => (
                          <option key={s.slug}>{s.name}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred day">
                      <input
                        type="date"
                        name="date"
                        className="input"
                      />
                    </Field>
                  </div>

                  <Field label="Anything we should know?" className="mt-4">
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Sensitive teeth, dental anxiety, child's first visit…"
                      className="input resize-none"
                    />
                  </Field>

                  <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-ink-muted max-w-xs">
                      By submitting you agree to be contacted by our front
                      desk. We don't share your details.
                    </p>
                    <button type="submit" className="btn-primary self-start">
                      Request appointment
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.75rem;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--tw-line, #e5ddcb);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #0e2a2a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.input:focus) {
          border-color: #1f5f55;
          box-shadow: 0 0 0 4px rgba(31, 95, 85, 0.12);
        }
        :global(.input::placeholder) {
          color: #98a3a3;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-widest text-ink-muted mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
