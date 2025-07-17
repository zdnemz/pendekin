import { response } from "@/lib/response";
import { createAnalytic } from "@/services/analytic.service";
import { getUrlByShortId, incrementClick } from "@/services/url.service";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const url = await getUrlByShortId(id);
    if (!url) {
      return response(false, 400, "URL not found");
    }

    const user_agent = req.headers.get("user-agent") || "Unknown";
    const referrer = req.headers.get("referer") || "Direct";
    const ip_address =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("cf-connecting-ip") ||
      "0.0.0.0";

    await createAnalytic({
      url_id: url.id,
      ip_address,
      referrer,
      user_agent,
    });

    await incrementClick(url.id);

    return response(true, 200, { url: url.original_url });
  } catch (error) {
    console.error("Error fetching URL:", error);
    return response(false, 500, "Internal Server Error");
  }
}
