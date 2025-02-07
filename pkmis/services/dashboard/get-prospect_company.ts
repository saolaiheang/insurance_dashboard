import prisma from "@/lib/prisma";

export async function getTotalPropectCompany(): Promise<string> {
  const data = await prisma.$queryRaw<
    { total_prospect_company: string }[]
  >` SELECT COUNT(*) as total_prospect_company
  FROM company c
  JOIN insurance_policy i ON i.company_id=c.id
  JOIN quotation q ON q.id=i.quotation_id
  WHERE q.quotation_status='Pending'`;
  console.log("ee",data)

  if (data.length > 0) return data[0].total_prospect_company;
  else return "0";
}
