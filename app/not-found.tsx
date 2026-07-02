import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen paper flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="eyebrow justify-center mb-5">404</div>
        <h1 className="font-bold text-display-md text-ink">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-ink-muted">
          The link may be old, or we may have moved things around. Either way —
          let's get you back home.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </main>
  );
}
