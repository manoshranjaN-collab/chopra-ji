import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream-50/95 backdrop-blur-md">
      <div className="container flex items-center gap-3 py-3">
        <a
          href={site.phoneHref}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 px-4 py-3 text-sm font-medium text-ink"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <Link
          href="#book"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-teal-600 px-4 py-3 text-sm font-medium text-cream-50 shadow-card"
        >
          <Calendar className="h-4 w-4" />
          Book a visit
        </Link>
      </div>
    </div>
  );
}
