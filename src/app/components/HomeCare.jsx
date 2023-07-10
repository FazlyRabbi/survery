"use client";
import { useEffect, useState } from "react";
import LeftMenu from "./Dashboard/LeftMenu";
import DataTable from "react-data-table-component";
import { HiMenuAlt1 } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";

// import tailwind modal
import {
  Card,
  Chip,
  Input,
  Dialog,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";

export default function HomeCare({ data }) {
  const [homeCares, setHomeCares] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
  const [singleDetails, setSignleDetails] = useState([]);
  // leoad search
  const [search, setSearch] = useState("");
  // set filtered members
  const [filtered, setFiltered] = useState([]);

  const closeSidebar = () => {
    setSidebar(false);
  };

  const handleModal = (data) => {
    setSignleDetails(data);
    setModal(true);
  };

  // table columns
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.fullName,
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
      name: "switchingAgency",
      selector: (row) => row.switchingAgency,
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <Chip
          color="blue"
          value="Detials"
          className=" capitalize cursor-pointer 
            
            text-sm  "
          onClick={() => handleModal(row)}
        />
      ),
    },
  ];

  useEffect(() => {
    setHomeCares(data?.data);
    setFiltered(data?.data);
  }, [data]);

  useEffect(() => {
    const result = homeCares?.filter((job) =>
      job.phoneNumber.toLowerCase().match(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, homeCares]);

  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#fff",
        fontSize: "14px",
        color: "#223354",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#F9FAFB",
        boxShadow: "none",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#223354",
        textTransform: "uppercase",
      },
    },
  };

  return (
    <>
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
                Homecares
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

        {/* ============================================ */}

        <Dialog open={modal}>
          <DialogHeader className="  flex  justify-between">
            <h1 className="ml-4"> {singleDetails.fullName} Details</h1>
            <TiDeleteOutline
              className=" text-[1.5rem]   cursor-pointer"
              onClick={() => setModal(false)}
            />
          </DialogHeader>

          <DialogBody>
            <form>
              <div className=" grid-cols-1 lg:grid-cols-2 p-5  grid gap-10 xl:grid-cols-3 ">
                {/* // Height */}
                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    Address
                  </label>

                  <Input
                    required
                    disabled
                    value={singleDetails.address}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    City
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.city}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    State
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.state}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    Postal Code
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.postalCode}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    Country
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.country}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    MedicalId
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.medicalId}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                    CallingTime
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.callingTime}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>

                <div>
                  <label className="font-bold  block mb-1  text-gray-900">
                  MLTC
                  </label>

                  <Input
                    // onChange={(e) =>
                    //   setData({ ...data, height: e.target.value })
                    // }

                    required
                    disabled
                    value={singleDetails.mltc}
                    type="text"
                    placeholder="height"
                    className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
              </div>
            </form>
          </DialogBody>
        </Dialog>
      </div>
    </>
  );
}
