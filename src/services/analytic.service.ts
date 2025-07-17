import { db } from "@/lib/db";
import type { Analytic } from "@/types/analytic";

export async function createAnalytic(data: Analytic) {
  return db.query(
    `INSERT INTO analytics (url_id, ip_address, user_agent, referrer)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [
      data.url_id,
      data.ip_address || null,
      data.user_agent || null,
      data.referrer || null,
    ]
  );
}

