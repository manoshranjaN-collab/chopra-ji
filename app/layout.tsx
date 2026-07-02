import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

// Refined serif used ONLY for the 1–3 italic accent words in headings.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
  style: ["italic"],
  weight: ["400", "500"],
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Dr Chopra Dental Clinic — Dentist in Durgapura, Jaipur",
  description:
    "Calm, modern dentistry in Green Nagar, Durgapura, Jaipur. Rated 4.9 by 429+ patients. Braces, clear aligners, painless root canals, implants and smile makeovers — by Dr Chopra.",
  metadataBase: new URL("https://www.drchopradentalclinic.in"),
  openGraph: {
    title: "Dr Chopra Dental Clinic",
    description:
      "Calm, modern dentistry in Durgapura, Jaipur. Rated 4.9 by 429+ patients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
