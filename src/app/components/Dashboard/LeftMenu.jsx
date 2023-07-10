import React from "react";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { MdAddHomeWork, MdOutlineNightShelter } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { GiHospitalCross } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import logo from "../../img/white-logo.png";
import Image from "next/image";

import { signOut } from "next-auth/react";

export default function LeftMenu({ sidebar, closeSidebar }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Card
        className={` ${
          sidebar ? "left-[0rem] z-50" : "-left-[100rem]"
        } xl:static xl:left-0  absolute  min-h-screen    w-[18rem]  p-4 shadow-xl
         
         bg-[#11192A]
        
        transition-all duration-300 shadow-white-900/5  rounded-none`}
      >
        <div className="mb-2 p-4   ">
          <div className="logo_box cursor-pointer">
            <Link href={`/`}>
              <Image src={logo} height={150} width={150} alt="logo" />
            </Link>
          </div>
          <div className="  w-full  mt-4  border-b border-[#ffffff1a] "></div>
        </div>

        <List>
          <ListItem className=" hover:bg-[#1F2737] hover:text-white hover:[&>*]:text-white">
            <ListItemPrefix>
              <MdAddHomeWork className="  text-[#ffffff4d] font-bold  text-[1.3rem]" />
            </ListItemPrefix>

            <Link
              href={`/dashboard`}
              className=" font-bold   text-[#ffffffb3] capitalize"
            >
              Homecares
            </Link>
            {/* <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="white"
                className="rounded-full"
              />
            </ListItemSuffix> */}
          </ListItem>

          <ListItem className="   hover:bg-[#1F2737] hover:text-white hover:[&>*]:text-white">
            <ListItemPrefix>
              <MdWorkHistory className="  text-[#ffffff4d] font-bold  text-[1.3rem]" />
            </ListItemPrefix>

            <Link
              href={`/dashboard/jobs`}
              className=" hover:text-white  font-bold  text-[#ffffffb3]  capitalize"
            >
              Jobs
            </Link>
          </ListItem>

          <ListItem className=" hover:bg-[#1F2737] hover:text-white hover:[&>*]:text-white">
            <ListItemPrefix>
              <GiHospitalCross className="  text-[#ffffff4d] font-bold  text-[1.3rem]" />
            </ListItemPrefix>

            <Link
              href={`/dashboard/healthcheck`}
              className=" hover:text-white  font-bold  text-[#ffffffb3]  capitalize"
            >
              Health Info
            </Link>
          </ListItem>

          <ListItem className=" hover:bg-[#1F2737] hover:text-white hover:[&>*]:text-white">
            <ListItemPrefix>
              <TbReport className="  text-[#ffffff4d] font-bold  text-[1.3rem]" />
            </ListItemPrefix>

            <Link
              href={`/dashboard/reports`}
              className=" hover:text-white  font-bold  text-[#ffffffb3]  capitalize"
            >
              Health Reports
            </Link>
          </ListItem>

          <ListItem className="hover:bg-[#1F2737]">
            <ListItemPrefix>
              <RiAdminLine className="h-5 w-5" />
            </ListItemPrefix>
            <Link
              href={`/dashboard/admin`}
              className=" hover:text-white  font-bold  text-[#ffffffb3]  capitalize"
            >
              Admin List
            </Link>
          </ListItem>

          <ListItem className="hover:bg-[#1F2737]" onClick={() => signOut()}>
            <ListItemPrefix>
              <FaPowerOff className="h-5 w-5" />
            </ListItemPrefix>
            <span className="hover:text-white  font-bold  text-[#ffffffb3]  capitalize">
              {" "}
              Log Out
            </span>
          </ListItem>
        </List>
      </Card>

      {sidebar && (
        <div
          onClick={() => closeSidebar()}
          className={`bg-[#00073433] blurCustom    absolute w-full h-full z-30`}
        ></div>
      )}
    </div>
  );
}
