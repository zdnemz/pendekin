import { response } from "@/lib/response";
import type { NextRequest } from "next/server";
import { nanoid } from "nanoid";
import { createUrl } from "@/services/url.service";
import { isValidUrl } from "@/lib/helper";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.original_url) {
      return response(false, 400, "Field 'original_url' wajib diisi");
    }

    if (!isValidUrl(data.original_url)) {
      return response(false, 400, "URL tidak valid");
    }

    const short_id = nanoid(7);

    await createUrl({ ...data, short_id });

    const base_url = new URL(req.url).origin;
    const short_url = `${base_url}/${short_id}`;

    return response(true, 201, { short_url });
  } catch (error) {
    console.error("Error fetching URL:", error);
    return response(false, 500, "Internal Server Error");
  }
}
