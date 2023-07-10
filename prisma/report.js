import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createReport = async (data) => {
  const response = await prisma.HealthCheackRepots.create({
    data: data,
  });

  return response;
};


export async function getAllReports() {
  const records = await prisma.HealthCheackRepots.findMany();
  return records;
}