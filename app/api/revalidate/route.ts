import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Sanity webhook target. When the client publishes a change in the Studio,
 * Sanity calls this endpoint, which instantly refreshes the live site's
 * cached content instead of waiting for the next scheduled revalidation.
 *
 * Configure in Sanity: Project → API → Webhooks
 *   URL: https://<your-site-domain>/api/revalidate
 *   Secret: same value as SANITY_REVALIDATE_SECRET below
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/services/[slug]", "page");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
