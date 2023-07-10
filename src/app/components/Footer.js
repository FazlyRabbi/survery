import { Typography } from "@material-tailwind/react";
import logo from "../../app/img/logo.png"
import Image from "next/image";
 
export default function Footer() {
  return (
    <footer className="w-full bg-[#EEEEF5]  p-10 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#EEEEF5] text-center md:justify-between">
        <Image src={logo} alt="logo-ct" className="w-12" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Terms and Condition
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Praivacy Polacsy
            </Typography>
          </li>
        
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 axzonshomecare 
      </Typography>
    </footer>
  );
}




