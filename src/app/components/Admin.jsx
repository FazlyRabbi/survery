"use client";

import { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";

// import leftmenu
import LeftMenu from "./Dashboard/LeftMenu";
// import useSweetAlert from "@/components/lib/sweetalert2";
import DataTable from "react-data-table-component";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Admin({ data }) {
  const [homeCares, setHomeCares] = useState([]);
  const [sidebar, setSidebar] = useState(false);

  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filtered, setFiltered] = useState([]);

  // table columns
  const columns = [
    {
      name: "Height",
      selector: (row) => row.height,
      sortable: true,
    },

    {
      name: "Weight",
      selector: (row) => row.weight,
      sortable: true,
    },
    {
      name: "BloodPressure",
      selector: (row) => row.bloodPressure,
      sortable: true,
    },
    {
      name: "PulseRate",
      selector: (row) => row.pulseRate,
      sortable: true,
    },

    {
      name: "CurrentComplaints",
      selector: (row) => row.currentComplaints,
      sortable: true,
    },
    {
      name: "BloodGlucose",
      selector: (row) => row.bloodGlucose,
      sortable: true,
    },
    {
      name: "UrinTest",
      selector: (row) => row.urinTest,
      sortable: true,
    },
    {
      name: "RecomendationByRN",
      selector: (row) => row.recomendationByRN,
      sortable: true,
    },
    {
      name: "NextFollowUpDate",
      selector: (row) => row.nextFollowUpDate,
      sortable: true,
    },
  ];

  const closeSidebar = () => {
    setSidebar(false);
  };

  useEffect(() => {
    setHomeCares(data?.data);
    setFiltered(data?.data);
  }, [data]);

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff",
        fontSize: "14px",
        color: "#333",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F9FAFB",
        boxShadow: "none",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#374151",
        textTransform: "uppercase",
      },
    },
  };

  return (
    <div className="   flex   bg-[#F2F5F9]">
      {/* <lest menu /> */}
      <LeftMenu
        className=" max-w-[18rem] "
        sidebar={sidebar}
        closeSidebar={closeSidebar}
      />

      {/* total page */}
      <div className=" w-full grid   h-full  overflow-y-scroll grid-cols-1  2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
        <div className="   2xl:col-span-3  2xl:order-2 ">
          {/* header */}
          <div className="  bg-white flex items-center  px-10 justify-between  h-[5rem] cutstomShad  w-full  mb-8">
            <h1 className=" uppercase  text-[#223354] font-bold">
                Admin List
            </h1>

            <div>
              <HiMenuAlt1
                className=" xl:hidden  text-[1.5rem] cursor-pointer"
                onClick={() => setSidebar(!sidebar)}
              />
            </div>
          </div>

          <Card className="  shadow-md mx-5 pl-10 pr-5">
            <DataTable
              columns={columns}
              data={filtered}
              selectableRowsHighlight
              highlightOnHover
              // selectableRows
              // fixedHeader
              subHeader
              subHeaderComponent={
                <div className="relative mb-6 mt-4  w-full shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-[#6B7280] dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="simple-search"
                    className="  bg-[#F9FAFB] border  border-softGray text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              }
              customStyles={customStyles}
              subHeaderAlign="center"
              pagination
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
