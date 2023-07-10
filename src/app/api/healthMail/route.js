import { createEdgeRouter } from "next-connect";
import { sendHealthmail } from "@/app/controllers/sendhealthmail.cont";
const router = createEdgeRouter();

router.post(sendHealthmail);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
