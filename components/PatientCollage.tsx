import { ImageIcon } from "lucide-react";
import { patientPhotos } from "@/lib/site";

export default function PatientCollage() {
  return (
    <section id="patients" className="section bg-cream-100/60 hairline border-y">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Happy patients</div>
            <h2 className="text-display-lg text-ink">
              The faces behind the{" "}
              <span className="accent text-teal-600">4.9</span>.
            </h2>
          </div>
          <p className="md:max-w-xs text-ink-muted">
            Real patients, real smiles — captured at the clinic and shared with
            their consent.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {patientPhotos.map((p) => (
            <figure
              key={p.id}
              className="group relative aspect-[542/658] overflow-hidden rounded-2xl border border-line bg-cream-100"
            >
              {p.src ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-muted">
                  <ImageIcon className="h-6 w-6 opacity-50" />
                  <span className="text-xs uppercase tracking-widest opacity-60">
                    Add photo
                  </span>
                </div>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
