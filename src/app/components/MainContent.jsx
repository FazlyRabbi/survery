import React from "react";
import Image from "next/image";
import logo from "../img/honeyComb.png";
import { AiFillContainer } from "react-icons/ai";

// imports images
import homeCare from "../../app/img/shelter.png";
import jobSearch from "../../app/img/job-seeker.png";
import helthCheck from "../../app/img/doctor.png";

function MainContent({ setSelect, setSetps }) {
  return (
    <div className=" flex justify-center items-center mt-[5rem]">
      <div>
        <h1 className="  w-[60%]  mx-auto leading-tight  text-[1rem] font-bold    


        md:text-[3rem] text-center  rounded-xl py-1">
          Welcome to Axzons
        </h1>
        {/* carts */}
        <div className=" carts grid grid-cols-1 mt-12 justify-items-center items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* cart 1 */}
        
        
          <div className="step1_radio" onClick={() => setSelect(1)}>
            <div className="flex justify-center items-center">
              <Image src={homeCare} alt="service" height={70} width={70} />
            </div>

            <label className="   px-10">
         
              <p className=" leading-tight    font-semibold  text-[1.2rem] capitalize">home care / CDPAP</p>
            </label>


            <input
              type="radio"
              name="service"
              defaultValue="Technician Services"
            />
          </div>



          {/* cart 2 */}
          <div onClick={() => setSelect(2)} className="step1_radio">
          <div className="flex justify-center items-center">
              <Image src={jobSearch} alt="service" height={70} width={70} />
            </div>
           
            <label className=" px-5">
              {" "}
              <p className=" leading-tight    font-semibold  text-[1.2rem] capitalize  ">Apply for a Job</p>
            </label>
           
            <input
              type="radio"
              name="service"
              defaultValue="Technician Services"
            />
          </div>

          {/* cart 3  */}
          <div className="step1_radio" onClick={() => setSelect(3)}>
          <div className="flex justify-center items-center">
              <Image src={helthCheck} alt="service" height={70} width={70} />
            </div>

            {/* <Image src={logo} alt="service" height={200} width={200} /> */}
            <label className="px-5">
              {" "}
              <p className="   leading-tight    font-semibold  text-[1.2rem] capitalize">Health check</p>
            </label>
            <input
              type="radio"
              name="service"
              defaultValue="Technician Services"
            />
          </div>
        </div>

        {/* bottom pera */}

        {/* <div className=" mt-16 text-center">
          <p className="   text-gray-700  w-[60%] mx-auto">
            Tation argumentum et usu, dicit viderer evertitur te has lucilius
            pertinacia eu vel.
          </p>
        </div> */}

        <div className=" flex justify-center items-center mt-16">
          <button
            onClick={() => setSetps((prev) => prev + 1)}
            className=" text-[2rem]  customBtn  btnSmall shadow-sm  font-bold  text-center  px-[65px] h-[65px]  rounded-[30px]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
