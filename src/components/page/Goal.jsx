import React from "react";
import { goalData } from "../common/Helper";
import { MessageButton } from "../common/Button";
import topGoal from "../../assets/images/topgoal.webp";
import bottomGoal from "../../assets/images/bottomgoal.webp";

const Goal = () => {
  return (
    <section className=" mt-7 md:mb-[90px]  relative  z-[1]">
      <div className="max-w-content mx-auto px-3 relative  z-[1]">
        <div className="row">
          {goalData.map((data, index) => (
            <div
              data-aos={data.aos}
              key={index}
              className=" lg:w-4/12 sm:w-1/2 w-full group hover:bg-white-200 duration-300 "
            >
              <div className=" lg:p-[63px_48px] p-[43px_24px] h-full xl:min-h-[230px]">
                <p className=" capitalize font-poppines font-normal text-base leading-[25px] text-gray-white-100 duration-300 group-hover:text-blue-dark-100">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
          <div className="  lg:w-4/12 sm:w-1/2 w-full ">
            <div className=" lg:p-[63px_48px] p-[43px_24px] h-full xl:min-h-[230px]">
              <MessageButton
                main=" rounded-lg"
                child="rounded-[7px] !py-[18px] !gap-[6px]"
                text="Book a non-binding initial consultation now"
              />
            </div>
          </div>
        </div>
        <div className=" absolute z-[-1] top-0 sm:-top-5 md:-top-[6%] xl:-top-7 left-0 right-0 pr-12 w-full  xl:left-[-3%]">
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" ml-5 sm:mt-[11px] w-[900px]   xl:w-[26px] h-3  xl:h-[581px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
              {" "}
            </div>
            <div className=" flex items-end ">
              <p className=" ff-neue sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                03
              </p>
              <p className=" ff-neue sm:translate-y-2  font-normal text-2xl leading-[30px]">
                GOAL
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={topGoal}
        alt="topGoal"
        className=" absolute right-0 top-[-33%] z-[-1]"
      />
      <img
        src={bottomGoal}
        alt="bottomGoal"
        className=" absolute left-0 bottom-[-32%] z-[-1]"
      />
    </section>
  );
};

export default Goal;
