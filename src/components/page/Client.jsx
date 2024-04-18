import React from "react";
import girlProfile from "../../assets/images/girlprofile.webp";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import { BlueQuttes } from "../common/Icon";
import { clientData1, clientData2 } from "../common/Helper";

const Client = () => {
  const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  const swiperRef = React.useRef();
  return (
    <section className=" client">
      <div className="max-w-content mx-auto px-3 relative z-[1] pt-20 md:pt-48 mt-2 pb-20 md:pb-[186px]">
        <h2
          data-aos="fade-down"
          className=" uppercase text-center ff-neue font-normal text-4xl lg:text-[52px] leading-[46px] lg:leading-[66px]"
        >
          What our <span className=" text-orange-white-100">clients</span> say
        </h2>
        <Swiper
          direction={"vertical"}
          modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
          loop={true}
          autoHeight={true}
          spaceBetween={200}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className=" sm:!px-40 relative z-[1] !pt-[84px] !pb-[20px]"
        >
          {clientData1.map((data, index) => (
            <SwiperSlide key={index} className=" !h-auto">
              <div className=" p-[58px_50px_32px] relative z-[1] shadow-[0px_2px_48px_0px_#00000014] h-full">
                <p className=" text-gray-white-100 font-poppines max-w-[721px] mx-auto text-base leading-[25px] text-center">
                  {data.discription}
                </p>
                <h3 className=" font-poppines pt-4 font-medium text-base leading-[25px] text-center">
                  {data.name}
                </h3>
                <p className="text-gray-white-100 font-normal font-poppines text-base leading-[25px] text-center">
                  {data.position}
                </p>
                <img
                  src={data.profile}
                  alt="girlProfile"
                  width={86}
                  height={86}
                  className=" absolute left-[50%] translate-x-[-50%] top-0 z-[-1] translate-y-[-55px]"
                />
              </div>
            </SwiperSlide>
          ))}
          <span className=" absolute top-[9%]  sm:top-[14%] right-[4%] z-[-1]">
            <BlueQuttes />
          </span>
        </Swiper>
        {/*  */}
        <Swiper
          breakpoints={{
            850: {
              slidesPerView: 2,
            },
          }}
          modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          className=" max-w-[790px] px-5 pb-10"
        >
          {clientData2.map((data, index) => (
            <SwiperSlide key={index} className=" h-auto">
              <div className=" p-[25px_36px_31px] mt-5 relative z-[1]  shadow-[0px_2px_48px_0px_#00000014] h-full">
                <p className=" text-gray-white-100 font-poppines max-w-[721px] mx-auto text-base leading-[25px] text-center">
                  {data.discription}
                </p>
                <h3 className=" font-poppines pt-4 font-medium text-base leading-[25px] text-center">
                  {data.name}
                </h3>
                <p className="text-gray-white-100 font-normal font-poppines text-base leading-[25px] text-center">
                  {data.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" absolute z-[-1]  right-[50%]   translate-x-[34%]  lg:translate-x-0 top-2 lg:-top-5 lg:right-5 xl:-right-0">
          <div className=" flex h-full justify-end flex-col items-end">
            <span className=" font-poppines translate-x-5 inline-block w-full max-w-max lg:-rotate-90 font-light text-xl leading-[34px]">
              MJH
            </span>
            <div className=" flex lg:items-end items-start gap-1">
              <div className=" flex items-end ">
                <p className=" ff-neue rotate-180 -translate-y-1 lg:translate-y-0 lg:-rotate-90 font-normal text-2xl lg:text-[40px]">
                  90
                </p>
              </div>
              <div className=" lg:mt-[11px] w-[135px] sm:w-[200px] lg:w-[26px] h-3  lg:h-[201px]  border-r-[2px] border-b-[2px] border-0 border-[#F77B0B]">
                {" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute z-[-1] bottom-3 xl:left-[-2%]">
          <span className=" font-poppines inline-block max-w-max sm:-rotate-90 font-light text-xl leading-[34px]">
            MJH
          </span>
          <div className=" flex sm:items-end items-start gap-1">
            <div className=" ml-5 sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-24 lg:h-[269px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
              {" "}
            </div>
            <div className=" flex sm:items-end items-center">
              <p className=" ff-neue sm:-rotate-90 font-normal text-lg sm:text-2xl sm:text-[40px]">
                07
              </p>
              <p className=" ff-neue uppercase translate-y-1 pl-1   font-normal text-lg sm:text-2xl leading-[30px]">
                take step
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
