import React, { useState } from "react";
import { Input, Radio } from "@material-tailwind/react";
import axios from "axios";
import useSweetAlert from "../lib/sweetalert2";

function Pk1st1({ setSetps }) {
  const [mctc, setMctc] = useState(false);

  const [isLoading, setIsloading] = useState(false);

  const { showAlert } = useSweetAlert();

  const inital = {
    fullName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    email: "",
    phoneNumber: "",
    lookingFor: "CDPAP",
    medicalId: "",
    mltc: "yes",
    callingTime: "",
    switchingAgency: "yes",
  };

  // data
  const [data, setData] = useState(inital);

  const hanleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsloading(true);
      const response = await axios.post(
        "http://localhost:3000/api/homecare",
        data
      );

      if (response.data.ok) {
        setData(inital);
        showAlert({
          icon: "success",
          title:
            "Thank you for contacting Axzons . we will get back to you ASAP!",
          showConfirmButton: false,
          timer: 5000,
        });
        setIsloading(false);
      } else {
        showAlert({
          icon: "error",
          title: "Data Not Insterted!",
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
    <div>
      <div className=" text-black  p-[4rem]  ">
        <p className=" text-gray-600 text-lg capitalize font-bold leading-relaxed">
          To Receive HomeCare or CDPAP please provide the Information below .
        </p>

        <div className=" container mx-auto  mt-10">
          <form onSubmit={hanleSubmit}>
            <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                required
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                label="First Name"
                className=" border-black"
                value={data.fullName}
              />
              <Input
                disabled={isLoading}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
                label="Last  Name"
                required
                className=" border-black"
                value={data.lastName}
              />
            </div>
            <div className="  mt-10">
              <Input
                disabled={isLoading}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                label="Address"
                className=" border-black"
                required
                value={data.address}
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                label="City"
                className=" border-black"
                required
                value={data.city}
              />

              <Input
                disabled={isLoading}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                label="State/Province"
                className=" border-black"
                required
                value={data.state}
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setData({ ...data, postalCode: e.target.value })
                }
                label="Postal/Zip Code"
                className=" border-black"
                value={data.postalCode}
                required
                type="number"
              />

              <Input
                disabled={isLoading}
                required
                onChange={(e) => setData({ ...data, country: e.target.value })}
                label="County"
                className=" border-black"
                value={data.country}
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
                label="Email"
                type="email"
                value={data.email}
                className=" border-black"
              />
              <Input
                disabled={isLoading}
                required
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
                label="Phone Number"
                type="number"
                value={data.phoneNumber}
                className=" border-black"
              />
            </div>
            <div className="question mt-10">
              {/* 1st line questions */}

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h1 className=" font-bold ">Are you looking for ?</h1>
                  <div className="flex gap-10">
                    <Radio
                      onChange={(e) =>
                        setData({ ...data, lookingFor: e.target.value })
                      }
                      id="CDPAP"
                      name="CDPAP"
                      label="CDPAP
"
                      value={`CDPAP`}
                    />
                    <Radio
                      onChange={(e) =>
                        setData({ ...data, lookingFor: e.target.value })
                      }
                      value={`HOMECARE`}
                      id="CDPAP"
                      name="CDPAP"
                      label="HOMECARE"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex gap-10">
                    <Input
                      disabled={isLoading}
                      required
                      onChange={(e) =>
                        setData({ ...data, medicalId: e.target.value })
                      }
                      value={data.medicalId}
                      type="text"
                      label="Medicaid id no :"
                    />
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 gap-10">
                <div>
                  <h1 className=" font-bold   ">
                    Are you registered with a MLTC ?
                    <p className=" text-sm ">
                      (e.g. Healthfirst ,Elderly ,CVNS)
                    </p>
                  </h1>
                  <div className="flex gap-10">
                    <Radio
                      id="mltc"
                      name="mltc"
                      label="yes"
                      onChange={(e) =>
                        setData({ ...data, mltc: e.target.value })
                      }
                      value={`yes`}
                    />
                    <Radio
                      id="mltc"
                      name="mltc"
                      label="no"
                      onChange={(e) =>
                        setData({ ...data, mltc: e.target.value })
                      }
                      value={`no`}
                    />
                  </div>
                </div>

                {mctc ? (
                  <div>
                    <h1 className=" font-bold   mb-2 ">
                      Please Type the MLTC name
                    </h1>
                    <div className="flex gap-10">
                      <Input
                        disabled={isLoading}
                        required
                        type="text"
                        label="name"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1 className=" font-bold   ">
                      Please tell us the best time to calling!
                    </h1>
                    <input
                      disabled={isLoading}
                      required
                      value={data.callingTime}
                      onChange={(e) =>
                        setData({ ...data, callingTime: e.target.value })
                      }
                      type="date"
                    />
                  </div>
                )}
              </div>

              <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h1 className=" font-bold   ">
                    Are you switching from another homecare agency?
                  </h1>
                  <div className="flex gap-10">
                    <Radio
                      id="agency"
                      name="agency"
                      label="Yes"
                      value={`yes`}
                      onChange={(e) =>
                        setData({ ...data, switchingAgency: e.target.value })
                      }
                    />
                    <Radio
                      value={`no`}
                      onChange={(e) =>
                        setData({ ...data, switchingAgency: e.target.value })
                      }
                      id="agency"
                      name="agency"
                      label="No"
                    />
                  </div>
                </div>
                {/* <div>
              <h1 className=" font-bold">MEDICAID id no ?</h1>
              <div className="flex gap-10">
                <Input
                 disabled={isLoading}
                required type="text" />
              </div>
            </div> */}
              </div>
            </div>
            <p className=" text-sm   mt-3">
              Once you submit the information to Axzons we will get back to you
              as soon as possible .
            </p>
            <div className="flex justify-center items-center space-x-6  mt-10 ">
              <button
                formAction="sbumit"
                onClick={() => setSetps(0)}
                className="customBtn btnSmall  "
              >
                <span className="text-white text-[1rem] font-bold">Back</span>
              </button>

              <button
                formAction="sbumit"
                className="customBtn btnSmall  "
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="text-white text-[1rem] font-bold animate-pulse">
                    Loading
                  </span>
                ) : (
                  <span className="text-white text-[1rem] font-bold">
                    Submit
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pk1st1;
