import prisma from "@/lib/prisma";

export async function getTotalHfPartner(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`SELECT
COUNT(*) - COUNT(CASE WHEN is_partner_hf = TRUE THEN 1 END) AS total_non_partner
FROM health_facility;`;
  console.log("hii",data)

  if (data.length > 0) return data[0].count;
  else return "0";
}
