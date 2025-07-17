import { db } from "@/lib/db";
import type { Url } from "@/types/url";

export async function getUrlByShortId(shortId: string) {
  const result = await db`
    SELECT * FROM urls WHERE short_id = ${shortId} LIMIT 1;
  `;

  return (result as unknown[])[0] as Url;
}

export async function incrementClick(urlId: number) {
  return db.query(
    `UPDATE urls SET click_count = click_count + 1 WHERE id = $1 RETURNING *`,
    [urlId]
  );
}
