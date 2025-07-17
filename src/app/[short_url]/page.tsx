import { redirect } from "next/navigation";
import { getUrlByShortId } from "@/services/url.service"; // service untuk ambil original_url dari DB

interface PageProps {
  params: Promise<{
    short_url: string;
  }>;
}

export default async function ShortRedirectPage({ params }: PageProps) {
  const { short_url } = await params;

  const { original_url } = await getUrlByShortId(short_url);

  if (!original_url) {
    redirect("/404");
  }

  redirect(original_url);
}
