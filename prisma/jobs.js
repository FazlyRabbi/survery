import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createJobs = async (data) => {
  const response = await prisma.Jobs.create({
    data: data,
  });

  return response;
};

export async function getAllJobs() {
  const records = await prisma.Jobs.findMany();
  return records;
}
