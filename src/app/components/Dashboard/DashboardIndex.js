"use client";
import React, { useState } from "react";
import LeftMenu from "./LeftMenu";
import Head from "next/head";
import DHeader from "./DHeader";

function DashboardIndex() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="lg:grid  bg-[#F7F7F7]   pl-10 lg:grid-cols-6  justify-items-left p-[3rem] ">
        <LeftMenu open={open} />
        <DHeader  open={open} toggleOpen={toggleOpen} />
      </div>
    </>
  );
}

export default DashboardIndex;
