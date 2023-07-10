"use client";
import React, { useState } from "react";
import axios from "axios";
import useSweetAlert from "../lib/sweetalert2";
import { Input } from "@material-tailwind/react";

function Pk3st1({ setSetps }) {
  const { showAlert } = useSweetAlert();

  // initial stats
  const init = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    phoneNumber: "",
    medicalId: "",
    schedule: "",
  };

  // health check

  const [healths, setHealths] = useState(init);

  const [isLoading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsloading(true);
      const response = await axios.post(
        "https://survery.vercel.app/api/health",
        healths
      );

      if (response.data.ok) {
        setHealths(init);
        showAlert({
          icon: "success",
          title:
            "Thank you for contacting Axzons . Please wait for a coordinator to assist you with your health checkup .",
          showConfirmButton: false,
          timer: 1000,
        });
        setIsloading(false);
      } else {
        showAlert({
          icon: "error",
          title: "Data Not Insterted!",
          showConfirmButton: false,
          timer: 1000,
        });
        setIsloading(false);
      }
    } catch (error) {
      setIsloading(false);
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <div className=" text-black  p-[4rem]  ">
        <p className=" text-gray-600 font-bold leading-relaxed">Health Check</p>

        <form onSubmit={handleSubmit}>
          <div className=" container mx-auto  mt-10">
            <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, firstName: e.target.value })
                }
                value={healths.firstName}
                label="First Name"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, lastName: e.target.value })
                }
                value={healths.lastName}
                label="Last  Name"
                className=" border-black"
              />
            </div>
            <div className="  mt-10">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, address: e.target.value })
                }
                value={healths.address}
                label="Address"
                className=" border-black"
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, city: e.target.value })
                }
                value={healths.city}
                label="City"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, state: e.target.value })
                }
                value={healths.state}
                label="State/Province"
                className=" border-black"
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, postalCode: e.target.value })
                }
                value={healths.postalCode}
                label="Postal/Zip Code"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, country: e.target.value })
                }
                value={healths.country}
                label="Country"
                className=" border-black"
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, email: e.target.value })
                }
                value={healths.email}
                label="Email"
                type="email"
                className=" border-black"
              />
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setHealths({ ...healths, phoneNumber: e.target.value })
                }
                value={healths.phoneNumber}
                label="Phone Number"
                type="number"
                className=" border-black"
              />
            </div>

            <div className="question mt-10">
              {/* 1st line questions */}

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* <div>
                <h1 className=" font-bold   capitalize">
                  are you looking for ?
                </h1>
                <div className="flex gap-10">
                  <Radio
                    id="hhaYes"
                    name="type"
                    label="CDPAP
"
                    defaultChecked
                  />
                  <Radio id="hhaNo" name="type" label="HOMECARE" />
                </div>
              </div> */}
                <div>
                  <h1 className=" font-bold"> Medicaid id no :</h1>
                  <div className="flex gap-10">
                    <Input
                      disabled={isLoading}
                      onChange={(e) =>
                        setHealths({ ...healths, medicalId: e.target.value })
                      }
                      value={healths.medicalId}
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <h1 className=" font-bold   ">
                    If you are not available for health check up today than
                    scheduled appointment
                  </h1>
                  <input
                    disabled={isLoading}
                    onChange={(e) =>
                      setHealths({ ...healths, schedule: e.target.value })
                    }
                    value={healths.schedule}
                    type="date"
                  />
                </div>
              </div>

              {/* 
            <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 gap-10">
              {/* <div>
                <h1 className=" font-bold   capitalize">
                  DO YOU HAVE A MCTC ?
                </h1>
                <div className="flex gap-10">
                  <Radio
                    id="hhaYes"
                    name="type"
                    label="yes
"
                    defaultChecked
                    onClick={() => setMctc(true)}
                  />
                  <Radio
                    id="hhaNo"
                    name="type"
                    label="no"
                    onClick={() => setMctc(false)}
                  />
                </div>
              </div> */}
              {/* 
              {mctc ? (
                <div>
                  <h1 className=" font-bold   mb-2 capitalize">
                    Type Your Name Here!
                  </h1>
                  <div className="flex gap-10">
                    <Input type="text" label="name" />
                  </div>
                </div>
              ) : (
                // <div>
                //   <h1 className=" font-bold   capitalize">
                //     Schedule your appointment for later !
                //   </h1>
                //   <input type="date" />
                // </div>
              )} */}
            </div>

            {/* <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h1 className=" font-bold   capitalize">
                  Are YOPU SWITCHING FROM Another Agency ..?
                </h1>
                <div className="flex gap-10">
                  <Radio
                    id="hhaYes"
                    name="type"
                    label="Yes
"
                    defaultChecked
                  />
                  <Radio id="hhaNo" name="type" label="No" />
                </div>
              </div>
              {/* <div>
              <h1 className=" font-bold">MEDICAID id no ?</h1>
              <div className="flex gap-10">
                <Input type="text" />
              </div>
            </div> 
          </div> */}
          </div>

          <div className="flex justify-center items-center space-x-6  mt-10 ">
            <button
              formAction="sbumit"
              onClick={() => setSetps(0)}
              className="customBtn btnSmall  "
            >
              <span className="text-white text-[1rem] font-bold">Back</span>
            </button>

            <button
              type="submit"
              formAction="sbumit"
              className="customBtn btnSmall  "
            >
              {isLoading ? (
                <span className="text-white text-[1rem] font-bold animate-pulse">
                  Loading...
                </span>
              ) : (
                <span className="text-white text-[1rem] font-bold">Submit</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pk3st1;
