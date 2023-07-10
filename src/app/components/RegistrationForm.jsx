"use client";
import React from "react";
import { Input, Radio } from "@material-tailwind/react";

function RegistrationForm() {
  return (
    <section className=" p-10">
      <div className=" container mx-auto ">
        <div className=" grid grid-cols-1 gap-x-10 md:grid-cols-2">
          <Input label="Full Name" className=" border-black" />
          <Input label="Last  Name" className=" border-black" />
        </div>
        <div className="  mt-10">
          <Input label="Address" className=" border-black" />
        </div>
        <div className=" grid grid-cols-1 mt-10 gap-x-10 md:grid-cols-2">
          <Input label="City" className=" border-black" />
          <Input label="State/Province" className=" border-black" />
        </div>
        <div className=" grid grid-cols-1 mt-10 gap-x-10 md:grid-cols-2">
          <Input label="Postal/Zip Code" className=" border-black" />
          <Input label="Country" className=" border-black" />
        </div>
        <div className=" grid grid-cols-1 mt-10 gap-x-10 md:grid-cols-2">
          <Input label="Email" type="email" className=" border-black" />
          <Input label="Phone Number" type="number" className=" border-black" />
        </div>

        <div className="question mt-10">
          {/* 1st line questions */}
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h1 className=" font-bold">Are You Looking For Job?</h1>
              <div className="flex gap-10">
                <Radio id="yes" name="type" label="Yes" defaultChecked />
                <Radio id="no" name="type" label="No" />
              </div>
            </div>
            <div>
              <h1 className=" font-bold">Are You HHA Certify?</h1>
              <div className="flex gap-10">
                <Radio id="hhaYes" name="type" label="Yes" defaultChecked />
                <Radio id="hhaNo" name="type" label="No" />
              </div>
            </div>
            <div>
              <h1 className=" font-bold">
                If they say are experience care Giver?
              </h1>
              <div className="flex gap-10">
                <Radio id="carYes" name="type" label="Yes" defaultChecked />
                <Radio id="carNo" name="type" label="No" />
              </div>
            </div>
          </div>
          {/* 2nd line questions */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h1 className=" font-bold">How Soon Can You Start?</h1>
              <div className="flex gap-10 mt-2">
                <input type="time"></input>
                <input type="date"></input>
              </div>
            </div>
            <div>
              <h1 className=" font-bold">Health Check?</h1>
              <div className="flex gap-10">
                <Radio id="hhaYes" name="type" label="Yes" defaultChecked />
                <Radio id="hhaNo" name="type" label="No" />
              </div>
            </div>
          </div>
          {/* 3rd line questions */}
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div>
              <h1 className=" font-bold">
                Do You Need Help with care in your home?
              </h1>
              <div className="flex gap-10 mt-2">
                <Radio id="hhaYes" name="type" label="Yes" defaultChecked />
                <Radio id="hhaNo" name="type" label="No" />
              </div>
            </div>
            <div>
              <h1 className=" font-bold">when are you available?</h1>
              <div className="flex gap-10 mt-2">
                <input type="time"></input>
                <input type="date"></input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            formAction="sbumit"
            className="customBtn btnSmall mt-10 "
          >
            <span className="text-white text-[1rem] font-bold">Submit</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
