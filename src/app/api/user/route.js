import { signup } from "@/app/controllers/signup.cont";
import { createEdgeRouter } from "next-connect";




const router = createEdgeRouter();

router.post(signup);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
