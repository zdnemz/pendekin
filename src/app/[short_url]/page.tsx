import { redirect } from "next/navigation";
import { getUrlByShortId } from "@/services/url.service";

interface PageProps {
  params: Promise<{
    short_url: string;
  }>;
}

export default async function ShortRedirectPage({ params }: PageProps) {
  const { short_url } = await params;

  const data = await getUrlByShortId(short_url);

  if (!data?.original_url) {
    redirect("/404");
  }

  const { original_url } = data;

  redirect(original_url);
}
