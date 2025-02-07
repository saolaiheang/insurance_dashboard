import prisma from "@/lib/prisma";

export async function getTotalHfPartner(): Promise<string> {
  const data = await prisma.$queryRaw<
    { total_hf_partners: string }[]
  >`SELECT
COUNT(CASE WHEN is_partner_hf = TRUE THEN 1 END) AS total_hf_partners
FROM health_facility`;
  console.log("hii",data)

  if (data.length > 0) return data[0].total_hf_partners;
  else return "0";
}
