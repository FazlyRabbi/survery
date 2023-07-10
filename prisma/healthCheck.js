import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CreateHealthCheacks = async (data) => {
  const response = await prisma.HealthCheacks.create({
    data: data,
  });

  return response;
};


export async function getAllHealthCheacks() {
  const records = await prisma.HealthCheacks.findMany();
  return records;
}