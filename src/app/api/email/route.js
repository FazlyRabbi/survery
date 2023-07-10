import { createEdgeRouter } from "next-connect";
import { sendMail } from "@/app/controllers/senmail.cont";

const router = createEdgeRouter();

router.post(sendMail);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
