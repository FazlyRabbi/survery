"use client";
import React, { useState } from "react";
import axios from "axios";
import useSweetAlert from "../lib/sweetalert2";
import { Input, Radio } from "@material-tailwind/react";

function Pk2st1({ setSetps }) {
  // initial stats

  const { showAlert } = useSweetAlert();

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
    height: "",
    weight: "",
    certificate: "yes",
    drive: "yes",
    experience: "",
    available: "",
  };

  const [jobs, setJobs] = useState(init);

  const [isLoading, setIsloading] = useState(false);

  const [complete, setComplete] = useState(undefined);

  const sendMail = async () => {
    const email = { email: jobs.email };

    const response = await axios.post(
      "https://survery.vercel.app/api/email",
      email
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsloading(true);
      const response = await axios.post(
        "https://survery.vercel.app/api/jobs",
        jobs
      );

      if (response.data.ok) {
        if (complete) {
          sendMail();
        }
        setJobs(init);
        showAlert({
          icon: "success",
          title: "",
          text: `Thank you for contacting Axzons .
          Your Application  has been Scheduled  for …Date ………..the setup already`,
          showConfirmButton: false,
          timer: 1000,
        });
        setIsloading(false);
      } else {
        setIsloading(false);
        showAlert({
          icon: "error",
          title: "Data Not Insterted!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (error) {
      setIsloading(false);
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <div className=" text-black  p-[4rem]  ">
        <p className="   text-gray-600 text-lg font-bold leading-relaxed">
          To apply for a job with Axzons please provide us the information below
          .once we have recived your information we will get back to you
          promptly .
        </p>

        <form onSubmit={handleSubmit}>
          <div className=" container mx-auto  mt-10">
            <div className=" grid grid-cols-1 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setJobs({ ...jobs, firstName: e.target.value })
                }
                value={jobs.firstName}
                label="First Name"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) => setJobs({ ...jobs, lastName: e.target.value })}
                value={jobs.lastName}
                label="Last  Name"
                className=" border-black"
              />
            </div>
            <div className="  mt-10">
              <Input
                disabled={isLoading}
                onChange={(e) => setJobs({ ...jobs, address: e.target.value })}
                value={jobs.address}
                label="Address"
                className=" border-black"
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) => setJobs({ ...jobs, city: e.target.value })}
                value={jobs.city}
                label="City"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) => setJobs({ ...jobs, state: e.target.value })}
                value={jobs.state}
                label="State/Province"
                className=" border-black"
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setJobs({ ...jobs, postalCode: e.target.value })
                }
                value={jobs.postalCode}
                label="Postal/Zip Code"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) => setJobs({ ...jobs, country: e.target.value })}
                value={jobs.country}
                label="County"
                type=""
                className=" border-black"
              />
            </div>
            <div className=" grid grid-cols-1 mt-10 gap-10 md:grid-cols-2">
              <Input
                disabled={isLoading}
                onChange={(e) => setJobs({ ...jobs, email: e.target.value })}
                value={jobs.email}
                label="Email"
                type="email"
                className=" border-black"
              />

              <Input
                disabled={isLoading}
                onChange={(e) =>
                  setJobs({ ...jobs, phoneNumber: e.target.value })
                }
                value={jobs.phoneNumber}
                label="Phone Number"
                type="number"
                className=" border-black"
              />
            </div>

            <div className="question mt-10">
              <div className=" grid grid-cols-1 my-10 md:grid-cols-2 gap-10">
                <div>
                  <h1 className=" font-bold   ">Height :</h1>
                  <div className="flex gap-10 mt-2">
                    <Input
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, height: e.target.value })
                      }
                      value={jobs.height}
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold   ">Weight :</h1>
                  <div className="flex gap-10 mt-2">
                    <Input
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, weight: e.target.value })
                      }
                      value={jobs.weight}
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* 1st line questions */}

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h1 className=" font-bold   ">
                    Do you have a HHA/PCA certificate?
                  </h1>
                  <div className="flex gap-10">
                    <Radio
                      id="hhaYes"
                      name="cirtificate"
                      label="Yes
"
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, certificate: e.target.value })
                      }
                      value={jobs.certificate}
                      defaultChecked
                    />

                    <Radio
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, certificate: e.target.value })
                      }
                      value={jobs.certificate}
                      id="hhaNo"
                      name="cirtificate"
                      label="No"
                    />
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold  ">Do you drive ?</h1>
                  <div className="flex gap-10">
                    <Radio
                      id="hhaYes"
                      name="drive"
                      label="Yes
"
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, drive: e.target.value })
                      }
                      value={jobs.drive}
                      defaultChecked
                    />
                    <Radio
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, drive: e.target.value })
                      }
                      value={jobs.drive}
                      id="hhaNo"
                      name="drive"
                      label="No"
                    />
                  </div>
                </div>

                <div>
                  <h1 className=" font-bold   ">
                    {" "}
                    Please provide your relevant experience for the job applied?
                  </h1>
                  <div className="flex gap-10 mt-2">
                    <Input
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, experience: e.target.value })
                      }
                      value={jobs.experience}
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-1 mt-10 md:grid-cols-2 gap-10">
                <div>
                  <h1 className=" font-bold   ">
                    When are you available to start?
                  </h1>
                  <div className="flex gap-10 mt-2">
                    <Input
                      disabled={isLoading}
                      onChange={(e) =>
                        setJobs({ ...jobs, available: e.target.value })
                      }
                      value={jobs.available}
                      type="date"
                    />
                  </div>
                </div>
                <div>
                  <h1 className=" font-bold   ">
                    Would you like to complete an employment application now ?
                  </h1>
                  <div className="flex gap-10 mb-2">
                    <Radio
                      id="hhaYes"
                      name="employment"
                      label="Yes
"
                      onClick={() => setComplete(true)}
                    />
                    <Radio
                      id="hhaNo"
                      name="employment"
                      label="No"
                      onClick={() => setComplete(false)}
                    />
                  </div>

                  {complete && (
                    <h1 className=" mt-2 text-sm ">
                      Thank you for contacting Axzons . Please check your email
                      for a link to the employment application for Axzons .
                    </h1>
                  )}
                  {!complete && (
                    <Input type="date" label="Date" className=" " />
                  )}
                </div>
              </div>
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
                disabled={isLoading}
                formAction="sbumit"
                className="customBtn btnSmall  "
              >
                {isLoading ? (
                  <span className=" animate-pulse text-white text-[1rem] font-bold">
                    Loading...
                  </span>
                ) : (
                  <span className="text-white text-[1rem] font-bold">
                    {isLoading ? "loading" : "Submit"}
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pk2st1;
