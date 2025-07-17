import { response } from "@/lib/response";
import { getUrlByShortId } from "@/services/url.service";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const url = await getUrlByShortId(id);
    if (!url) {
      return response(false, 400, "URL not found");
    }

    return response(true, 200, { url: url.original_url });
  } catch (error) {
    console.error("Error fetching URL:", error);
    return response(false, 500, "Internal Server Error");
  }
}
