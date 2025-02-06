import prisma from "@/lib/prisma";

export async function getTotalPropectCompany(): Promise<string> {
  const data = await prisma.$queryRaw<
    { total_prospect_company: string }[]
  >`SELECT
COUNT(DISTINCT c.id) AS total_prospect_company
FROM employee e
JOIN company c ON e.company_id = c.id; `;
  console.log("ee",data)

  if (data.length > 0) return data[0].total_prospect_company;
  else return "0";
}
