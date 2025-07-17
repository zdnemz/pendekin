import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from "@/constants/env";

const globalDb = global as unknown as {
  neon: ReturnType<typeof neon>;
};

export const db = globalDb.neon || neon(DATABASE_URL);
