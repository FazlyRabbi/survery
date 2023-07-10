import { createEdgeRouter } from "next-connect";
import { getJobs, postJobs } from "@/app/controllers/jobs.cont";
const router = createEdgeRouter();

router
  // A middleware example
  //   .use(async (req, event, next) => {
  //     const start = Date.now();
  //     await next(); // call next in chain
  //     const end = Date.now();
  //     console.log(`Request took ${end - start}ms`);
  //   })
  .get(getJobs)
  .post(postJobs);

export async function GET(request, ctx) {
  return router.run(request, ctx);
}

export async function PUT(request, ctx) {
  return router.run(request, ctx);
}

export async function POST(request, ctx) {
  return router.run(request, ctx);
}
