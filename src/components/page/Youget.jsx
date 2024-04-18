import React from "react";
import { MessageButton } from "../common/Button";
import purpleFlower from "../../assets/images/purleflower.png";
const Youget = () => {
  return (
    <section id="benifits">
      <div className="  relative z-[1] max-w-content mx-auto px-3">
        <p
          data-aos="fade-down"
          className=" font-poppines pb-5 font-normal text-base text-center pt-12
          leading-[25px]"
        >
          {" "}
          You are not alone! Numerous women before you stood exactly at this
          point, where you are now.
        </p>
        <MessageButton
          main="mx-auto"
          text="Book a non-binding initial consultation now"
        />
        <div className=" row items-center mt-28 pt-[10px]">
          <div className=" md:w-6/12 w-full px-3">
            <div className=" flex gap-[12px] items-center justify-center md:justify-end">
              <h2 className=" ff-neue font-normal uppercase max-w-[266px] text-4xl lg:text-[52px] leading-[44px] lg:leading-[66px]">
                what you{" "}
                <span
                  className=" xl:text-6xl xl:leading-[78px]"
                  data-aos="fade-up"
                >
                  will
                </span>
                <span
                  data-aos="fade-up"
                  className="text-orange-white-100 xl:leading-[78px] xl:text-6xl"
                >
                  {" "}
                  GET
                </span>{" "}
              </h2>
              <img
                src={purpleFlower}
                alt="purplefolwer"
                className=" max-w-[170px] lg:max-w-[224px] w-full animate-spin-flower"
              />
            </div>
          </div>
          <div className=" md:w-6/12 w-full px-3 pt-6 md:pt-0">
            <p className=" border-l-[2px] mx-auto md:mx-0  pl-[11px] border-l-[#9800B0] max-w-[430px] text-base font-poppines leading-[25px]  font-normal">
              I will show you which steps are necessary for you to finally
              successfully let go of your EX. And I will support you to look
              confidently into your new future.
            </p>
          </div>
        </div>
        <p
          data-aos="fade-down"
          className=" ff-neue font-black text-xl leading-[28px] text-center pt-12"
        >
          In a 1:1 live coaching session, we will clarify the following
          questions in particular:
        </p>
        <div className=" absolute z-[-1] xl:h-[330px]  right-[50%] top-[31%] translate-x-[34%]  lg:translate-x-0 lg:top-10 lg:right-5 xl:-right-2">
          <div className=" flex h-full justify-end flex-col items-end">
            <span className=" font-poppines translate-x-5 inline-block w-full max-w-max lg:-rotate-90 font-light text-xl leading-[34px]">
              MJH
            </span>
            <div className=" flex lg:items-end items-start gap-1">
              <div className=" flex items-end ">
                <p className=" ff-neue lg:rotate-90 font-normal text-2xl lg:text-[40px]">
                  02
                </p>
              </div>
              <div className=" lg:mt-[11px] w-[135px] sm:w-[200px] lg:w-[26px] h-3  lg:h-[250px] xl:h-[269px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]">
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youget;
