"use client";
import { useEffect, useState } from "react";
// import leftmenu
import LeftMenu from "./Dashboard/LeftMenu";
// import useSweetAlert from "@/components/lib/sweetalert2";
import DataTable from "react-data-table-component";
import { TiDeleteOutline } from "react-icons/ti";
import { HiMenuAlt1 } from "react-icons/hi";
import axios from "axios";

import useSweetAlert from "./lib/sweetalert2";

// import tailwind modal
import {
  Chip,
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Card,
} from "@material-tailwind/react";

export default function Healthcheck({ datas }) {
  const [sidebar, setSidebar] = useState(false);

  const init = {
    height: "",
    weight: "",
    bloodPressure: "",
    pulseRate: "",
    currentComplaints: "",
    bloodGlucose: "",
    urinTest: "",
    recomendationByRN: "",
    nextFollowUpDate: "",
  };

  const [data, setData] = useState(init);

  const [isLoading, setIsloading] = useState(false);

  const [showDetails, setShowDetails] = useState(false);

  const [name, setName] = useState("");

  // showing alert
  const { showAlert } = useSweetAlert();
  // loead init members
  const [healths, setHealths] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filtered, setFiltered] = useState([]);

  const handleModal = (name) => {
    setShowDetails(true);

    setName(name);
  };

  // table columns
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },

    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },

    {
      name: "medicalId",
      selector: (row) => row.medicalId,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <Chip
          color="blue"
          value="Health Check"
          className=" capitalize cursor-pointer 
            
            text-sm  "
          onClick={() => handleModal(row.firstName)}
        />
      ),
    },
  ];

  useEffect(() => {
    setHealths(datas);
    setFiltered(datas);
  }, [datas]);

  useEffect(() => {
    const result = healths?.filter((health) =>
      health.phoneNumber.toLowerCase().match(search.toLowerCase())
    );

    setFiltered(result);
  }, [search, healths]);

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff",
        fontSize: "14px",
        color: "#333",
        padding: "1rem 0",
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

  const closeSidebar = () => {
    setSidebar(false);
  };

  const hanleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:3000/api/report",
        data
      );

      if (response.data.ok) {
        setData(init);
        showAlert({
          icon: "success",
          title: "report added successfully",
          showConfirmButton: false,
          timer: 5000,
        });
        setIsloading(false);
      } else {
        showAlert({
          icon: "error",
          title: "internal server error!",
          showConfirmButton: false,
          timer: 5000,
        });
        setIsloading(false);
      }
    } catch (error) {
      setIsloading(false);
      console.error("Error:", error.message);
    }
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
              Healthcheck
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
        {/* ============================================ */}

        <Dialog open={showDetails}>
          <DialogHeader className="  flex  justify-between">
            <h1 className="ml-4">{name} Health Check</h1>
            <TiDeleteOutline
              className=" text-[1.5rem]   cursor-pointer"
              onClick={() => setShowDetails(false)}
            />
          </DialogHeader>

          <DialogBody>
            <form onSubmit={hanleSubmit}>
              <div className=" grid-cols-1 lg:grid-cols-2 p-5  grid gap-10 xl:grid-cols-3 ">
                {/* // Height */}
                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    Height
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, height: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.height}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* Weigh */}

                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Weight
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, weight: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.weight}
                    type="text"
                    placeholder="weight"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* .Blood Pressure */}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Blood Pressure
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, bloodPressure: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.bloodPressure}
                    type="text"
                    placeholder="blood pressure"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* . Pulse Rate*/}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Pulse Rate
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, pulseRate: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.pulseRate}
                    type="text"
                    placeholder="Pulse Rate"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* . Current complaints
                 */}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Current complaints
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, currentComplaints: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.currentComplaints}
                    type="text"
                    placeholder="Current complaints"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* . Blood glucose (Dipstick)
                 */}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Blood glucose (Dipstick)
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, bloodGlucose: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.bloodGlucose}
                    type="text"
                    placeholder="Blood glucose (Dipstick)"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* . Urine Test(Dipstick Test)

      */}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Urine Test(Dipstick Test)
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, urinTest: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.urinTest}
                    type="text"
                    placeholder="Urine Test(Dipstick Test)"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* . Recommendation by RN.

      */}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Recommendation by RN.
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, recomendationByRN: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.recomendationByRN}
                    type="text"
                    placeholder="Recommendation by RN."
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                {/* . Next Follow up date

      */}
                <div>
                  <label className="  text-gray-900 font-bold  block mb-1">
                    Next Follow up date
                  </label>

                  <Input
                    onChange={(e) =>
                      setData({ ...data, nextFollowUpDate: e.target.value })
                    }
                    required
                    disabled={isLoading}
                    value={data.nextFollowUpDate}
                    type="date"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
              </div>

              <div className=" flex justify-center items-center my-5">
                <Button type="submit" disabled={isLoading}>
                  Submit
                </Button>
              </div>
            </form>
          </DialogBody>
        </Dialog>
      </div>
    </div>
  );
}
