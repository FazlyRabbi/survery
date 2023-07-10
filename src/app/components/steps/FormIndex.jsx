"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../img/logo.png";
import MainContent from "../MainContent";

// import pakage 1 steps
import Pk1st1 from "./Pk1st1";
// import pakage 2 steps
import Pk2st1 from "./Pk2st1";
// import pakage 3steps
import Pk3st1 from "./Pk3st1";

function FormIndex() {
  const [select, setSelect] = useState(1);

  const [steps, setSetps] = useState(0);

  function goHome() {
    setSelect(1);
    setSetps(0);
  }

  return (
    <div className="bgImage min-h-full md:p-[5rem] flex justify-center items-center  w-[100vw]">
      {/* carts main */}
      <div className=" main__cart   shadow-md p-[4rem] custoGradient overflow-hidden  rounded-[60px] w-full   bg-black  min-h-full">
        {/* middle content */}

        <div className="logo box cursor-pointer" onClick={() => setSetps(0)}>
          <Image src={logo} height={150} width={150} alt="logo" />
        </div>

        {/* content */}

        <div>
          {steps === 0 ? (
            <MainContent setSelect={setSelect} setSetps={setSetps} />
          ) : (
            ""
          )}

          {/* package 1 */}
          {select === 1 && steps === 1 && <Pk1st1 setSetps={setSetps} />}
          {/* {select === 1 && steps === 2 && <Pk1st2 />}
          {select === 1 && steps === 3 && <Pk1st3 />} */}
          {/* package 2 */}
          {select === 2 && steps === 1 && <Pk2st1 setSetps={setSetps} />}
          {/* {select === 2 && steps === 2 && <Pk2st2 />}
          {select === 2 && steps === 3 && <Pk2st3 />} */}
          {/* package 3 */}
          {select === 3 && steps === 1 && <Pk3st1 setSetps={setSetps} />}
          {/* {select === 3 && steps === 2 && <Pk3st2 />}
          {select === 3 && steps === 3 && <Pk3st3 />} */}
        </div>

        {/* ======= */}
      </div>
    </div>
  );
}

export default FormIndex;
