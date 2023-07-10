import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createHomeCare = async (data) => {
  const homeCare = await prisma.HomeCare.create({
    data: data,
  });

  return homeCare;
};


export async function getAllHomeCares() {
  const records = await prisma.HomeCare.findMany();
  return records;
}