import { neon } from "@neondatabase/serverless";
import { DATABASE_URL } from "@/constants/env";

const globalDb = global as unknown as {
  neon: ReturnType<typeof neon>;
};

const baseSql = globalDb.neon || neon(DATABASE_URL);

export const db = async <T extends object>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<T[]> => {
  const result = await baseSql(strings, ...values);
  return (result as { rows: T[] }).rows;
};
