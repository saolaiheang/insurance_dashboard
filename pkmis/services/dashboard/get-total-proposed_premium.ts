import prisma from "@/lib/prisma";

export async function getProposetPrimiumAmounts(): Promise<string> {
  const data = await prisma.$queryRaw<
    { total: string }[]
  >`select sum(proposed_premium) as total
  from quotation`;
  if (data.length > 0) return data[0].total;
  else return "0";
}
