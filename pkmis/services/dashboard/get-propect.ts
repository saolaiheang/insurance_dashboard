import prisma from "@/lib/prisma";

export async function getTotalPropect(): Promise<string> {
  const data = await prisma.$queryRaw<
    { total_prospect: string }[]
  >`SELECT COUNT(DISTINCT e.id)-
COUNT(DISTINCT i.employee_id) as total_prospect
  FROM employee e
  LEFT JOIN insured_coverage i ON i.employee_id=e.id `;
  console.log("hii",data)

  if (data.length > 0) return data[0].total_prospect;
  else return "0";
}
