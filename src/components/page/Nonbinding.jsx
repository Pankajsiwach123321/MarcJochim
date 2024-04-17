import React from "react";
import { harmonesData } from "../common/Helper";
import { MessageButton } from "../common/Button";

const Nonbinding = () => {
  return (
    <section>
      <div className=" bg-[#F2F8FF]">
        <div className="max-w-content mx-auto px-3 pt-10 md:pt-[71px]">
          <div className="row items-center md:pb-14">
            <div className="sm:w-7/12 w-full px-3">
              <h2 className=" ff-neue font-normal text-center sm:text-start  uppercase  max-w-[610px]  text-4xl lg:text-[52px] leading-[44px] lg:leading-[66px]">
                Request your <br />
                <span className="text-orange-white-100 ">non-binding</span>{" "}
                strategy meeting now!
              </h2>
            </div>
            <div className="sm:w-5/12 w-full pt-6 sm:pt-0 px-3">
              <p className=" border-l-[2px] mx-auto sm:mx-0  sm:ml-auto  pl-[14px] border-l-[#9800B0] text-base font-poppines leading-[25px] max-w-[413px]   font-normal">
                Click on the button below, choose an appointment and answer the
                questions truthfully. One of our strategy consultants will then
                contact you and conduct your free consultation. We can advise
                you on the following topics:
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[url(./assets/images/Harmones.png)] relative z-[1] bg-no-repeat bg-cover bg-center md:bg-fullsize mt-[52px] after:absolute after:inset-0 after:bg-[#003e922e] after:backdrop-blur-sm pb-10 md:pb-[186px] pt-10  md:pt-28 ">
          <div className="max-w-content mx-auto px-3  relative z-[1]">
            <div className="row  justify-center">
              {harmonesData.slice(0, 3).map((data, index) => (
                <div key={index} className="max-w-[250px] w-full">
                  <div className=" bg-[#ffffff26] hover:bg-[#003E92] duration-300 p-[61px_26px] h-full min-h-[200px]">
                    <p className=" font-poppines text-base font-normal leading-[25.6px] text-white">
                      {data.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-[29px] justify-center ">
              {harmonesData.slice(3).map((data, index) => (
                <div key={index} className="max-w-[250px] w-full">
                  <div className=" bg-[#FFFFFF26] hover:bg-[#003E92] duration-300 p-[61px_26px] h-full min-h-[200px]">
                    <p className=" font-poppines text-base font-normal leading-[25.6px] text-white">
                      {data.para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <MessageButton
              main="mx-auto mt-14"
              text="Book A Non-Binding Initial Consultation Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nonbinding;
