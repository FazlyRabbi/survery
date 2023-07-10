import React from "react";
import Healthcheck from "@/app/components/Healthcheck";
export default async function page() {
  const datas = await getData();

  return (
    <div>
      <Healthcheck datas={datas.data} />
    </div>
  );
}

async function getData() {
  const res = await fetch("https://survery.vercel.app/api/health", {
    cache: "force-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
