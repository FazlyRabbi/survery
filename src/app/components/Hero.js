import React from "react";
import Image from "next/image";
import HeroImg from "../img/heroimg.png";
import Link from "next/link";
import doctors from "../img/honeyComb.png";
import heroImage from "../img/hero-bg-2.png";
import { Button } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative">
      <div>
        <div className="bgImage  xl:h-[84vh] h-[30rem] ">
          <div className=" grid grid-cols-1  px-10 h-full   ">
            <div className="    xl:w-[80%] ">
              <h1 className="  text-[3rem]  mt-[10%] xl:text-[4.8rem] font-bold  leading-tight  text-white">
                Elevating the Standerds <br /> of Homecare.
              </h1>

              <div className=" flex justify-center items-center">
                <button className=" customBtn font-bold  shadow-lg mt-10">
                  <span className="  text-white uppercase font-bold text-[1.5rem]">
                    {" "}
                    Fill up the application
                  </span>
                </button>
              </div>
            </div>
            <div className="  absolute right-0   ">
              <Image
                src={doctors}
                alt="doctors"
                className="  xl:h-[50rem] xl:w-[50rem] md:h-[30rem] md:w-[30rem]  hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
