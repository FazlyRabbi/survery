import React from "react";
import Reports from "@/app/components/Reports";
export default async function page() {
  const data = await getData();

  return (
    <div>
      <Reports data={data} />
    </div>
  );
}

async function getData() {
  const res = await fetch("https://survery.vercel.app/api/report", {
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
