import { createEdgeRouter } from "next-connect";
import { getHomeCere, postHomeCere } from "../../controllers/homeCare.cont";


const router = createEdgeRouter();

router.get(getHomeCere).post(postHomeCere);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
