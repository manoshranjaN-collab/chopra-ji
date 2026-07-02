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
  title: "Dr Lipsa's Dental Clinic — Dentist in Marol, Powai, Mumbai",
  description:
    "Calm, modern dentistry on Saki Vihar Road, Marol (Powai), Mumbai. Rated 5.0 by 555+ patients. Painless root canals, implants, aligners and smile makeovers — by Dr Lipsa Wadhwani.",
  metadataBase: new URL("https://drlipsadental.example.com"),
  openGraph: {
    title: "Dr Lipsa's Dental Clinic",
    description:
      "Calm, modern dentistry in Marol, Powai, Mumbai. Rated 5.0 by 555+ patients.",
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
