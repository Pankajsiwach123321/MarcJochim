import React from "react";
import bearMan from "../../assets/images/manbeard.png";
import { AboutEllipes, ArrowButton } from "../common/Icon";
const About = () => {
  return (
    <section className="mt-3 relative z-[1]">
      <div className="max-w-content mx-auto px-3">
        <div className=" flex items-end  gap-1">
          <div className=" ml-5 mt-[11px]  w-[26px] h-24 md:h-[167px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
            {" "}
          </div>
          <div className=" flex items-end ">
            <p className=" ff-neue -rotate-90 font-normal text-2xl text-[40px]">
              05
            </p>
            <p className=" ff-neue  font-normal text-2xl leading-[30px]">
              ABOUT
            </p>
          </div>
        </div>
        <div className="row mt-[52px]">
          <div className="lg:w-6/12 w-full px-3">
            <img
              src={bearMan}
              alt="bearMan"
              className=" w-full lg:mx-0 mx-auto max-w-[559px]"
            />
          </div>
          <div className="lg:w-6/12 text-center lg:text-start lg:pt-0 pt-6 w-full px-3">
            <div className="lg:pl-[28px]">
              <h2
                data-aos="fade-down"
                className=" ff-neue font-normal text-4xl lg:text-[52px] leading-[46px] lg:leading-[66px]"
              >
                LAWYER <span className=" text-orange-white-100">& </span>DIVORCE
                COACH
              </h2>
              <p
                data-aos="fade-down"
                className=" text-4xl leading-[47px] font-normal ff-neue uppercase"
              >
                <span className="first-letter:text-orange-white-100 inline-block">
                  Marc
                </span>{" "}
                <span className="first-letter:text-orange-white-100 inline-block">
                  Joachim
                </span>{" "}
                <span className="first-letter:text-orange-white-100 inline-block">
                  Hubrich
                </span>
              </p>
              <p className=" font-black text-xl leading-7 ff-neue pt-[30px]">
                About the mindset agency coach
              </p>
              <p className=" font-poppines font-normal text-base leading-[25px] pt-3 text-gray-white-100">
                Marc J. Hubrich is the founder of the mindset agency
                specializing in consulting services.
              </p>
              <div className=" group mt-9 bg-bgButton p-[2px] rounded-[59px] inline-block">
                <div className=" bg-white rounded-[59px]">
                  <button className="  px-4 md:px-[32px] py-4 flex items-center gap-3 bg-bgButton bg-clip-text text-transparent font-inter font-medium text-base leading-6">
                    Learn More About The Agency{" "}
                    <span className=" inline-block group-hover:translate-x-[3px] duration-300">
                      <ArrowButton />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className=" absolute z-[-1] bottom-[-5%] right-[0%]">
        <AboutEllipes />
      </span>
    </section>
  );
};

export default About;
