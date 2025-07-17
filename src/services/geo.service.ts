export async function getCountry(ip: string): Promise<string> {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
    return data.country_name || "Unknown";
  } catch {
    return "Unknown";
  }
}
