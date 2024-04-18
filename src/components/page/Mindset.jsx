import React from "react";
import { MessageButton, SwiperButton } from "../common/Button";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFlip, Navigation, Pagination } from "swiper/modules";
import { EllipesSlider } from "../common/Icon";
import { firstSwiperData } from "../common/Helper";

const Mindset = () => {
  return (
    <section className=" mt-[10px] mindset">
      <div className=" max-w-content mx-auto px-3">
        <div className=" flex h-full justify-ed flex-col items-end">
          <span className=" font-poppines xl:translate-x-5 translate-x-3 inline-block w-full max-w-max -rotate-90 font-light text-xl leading-[34px]">
            MJH
          </span>
          <div className=" flex items-end  gap-1">
            <div className=" flex items-end ">
              <p className=" uppercase ff-neue font-normal text-2xl leading-[30px] translate-y-2">
                analysis
              </p>
              <p className=" ff-neue rotate-90 font-normal text-2xl text-[40px]">
                04
              </p>
            </div>
            <div className=" mt-[11px]  w-[26px] h-32 md:h-44 lg:h-[201px] border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]">
              {" "}
            </div>
          </div>
        </div>
        <div className="row mt-7 md:mb-[186px] mb-10">
          <div className=" lg:w-1/2 lg:pt-9 text-center lg:text-start w-full xl:w-[484px] px-3 xl:px-0">
            <p
              data-aos="fade-down"
              className=" ff-neue font-normal text-[29px] leading-[37px]"
            >
              THE FOUR PHASES OF
            </p>
            <h2
              data-aos="fade-up"
              className=" ff-neue font-normal  uppercase   text-4xl lg:text-[52px] leading-[44px] lg:leading-[62px]"
            >
              SEPARATION{" "}
              <span className="text-orange-white-100 block ">TARGET</span>
            </h2>
            <p className=" text-gray-white-100 mx-auto lg:mx-0 font-poppines max-w-[484px] text-base leading-[25px] pt-5">
              There are 4 typical separation phases. The 4 phases are not always
              clearly separated from each other and can overlap.
            </p>
            <MessageButton
              main=" mt-[36px] mx-auto lg:mx-0"
              text="Book a non-binding initial consultation now"
            />
          </div>
          <div className=" lg:w-1/2 w-full xl:justify-end xl:flex xl:w-[653px] xl:px-0 px-3 pt-6 lg:pt-0">
            <div>
              <Swiper
                effect={"flip"}
                loop={true}
                pagination={true}
                navigation={false}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper xl:h-[448px]  relative z-[1]  lg:max-w-[608px] lg:max-h-[448px] w-full"
              >
                {firstSwiperData.map((data, index) => (
                  <SwiperSlide key={index}>
                    <div className=" relative z-[1] bg-[#003E92] h-full w-full p-10 md:p-20 lg:p-[100px] xl:p-[133px_122px]">
                      <p className=" text-white font-medium text-xl leading-[32px] text-center">
                        {data.phase} <br /> {data.phaseintro}
                      </p>
                      <p className=" font-normal text-base leading-[25px] text-center font-poppines pt-[15px] text-white">
                        {data.discription}
                      </p>
                      <span className=" absolute bottom-0 right-0 z-[-1]">
                        <EllipesSlider />
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
                <div className=" absolute bottom-2 left-0 lg:left-[-7%] z-[1]">
                  <SwiperButton />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mindset;
