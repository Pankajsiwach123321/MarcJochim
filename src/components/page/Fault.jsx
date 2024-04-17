import React from "react";
import { ElippesFault } from "../common/Icon";

const Fault = () => {
  return (
    <section className=" md:pt-16 lg:pt-24 relative z-[1]  xl:pt-36 mt-[6px]">
      <div className=" max-w-content px-3 mx-auto">
        <div className="row">
          <div className="md:w-7/12 w-full px-3">
            <h2 className=" ff-neue font-normal text-4xl md:text-6xl leading-[44px] md:leading-[77px] text-center">
              IT'S NOT
            </h2>
            <h2 className=" ff-neue font-normal text-4xl md:text-6xl leading-[44px] md:leading-[77px] md:text-end text-center">
              <span className="text-orange-white-100">YOUR</span> FAULT!
            </h2>
          </div>
          <div className="md:w-5/12 w-full md:pt-0 pt-6 my-auto  px-3">
           <div className="md:pl-12">
             <p className=" border-l-[2px] mx-auto md:mx-0  pl-[11px] border-l-[#9800B0] text-base font-poppines leading-[25px] max-w-[288px] font-normal">
               It's not your fault for not knowing how to let go of the partner
               who no longer made you feel special.
             </p>
           </div>
          </div>
        </div>
        <p className=" mt-7 lg:mt-14 lg:pt-[2px] text-xl leading-7 text-center ff-neue font-black">
          How would you know when you are busy with completely different things
          at the moment:
        </p>
      </div>
      <span className=" absolute z-[-1] right-0 bottom-[-16%]" >
        <ElippesFault />
      </span>
    </section>
  );
};

export default Fault;
