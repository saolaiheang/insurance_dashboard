import prisma from "@/lib/prisma";

export async function getTotalQuotation(): Promise<string> {
  const data = await prisma.$queryRaw<
    { count: string }[]
  >`select count(id) from quotation`;
  if (data.length > 0) return data[0].count;
  else return "0"
}


export async function getAvgPremium() {
  const data = await prisma.$queryRaw<{ premium: string | null }[]>`
    select avg(q.proposed_premium) as premium
    from quotation q 
  `;

  if (data.length > 0) {
    return data[0].premium ? data[0].premium : "0";
  } else {
    return "0";
  }
}