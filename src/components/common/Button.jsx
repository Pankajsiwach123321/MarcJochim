import { useSwiper } from "swiper/react";
import gradiantMessage from "../../assets/images/gradiantmessage.webp";

import { NextArrow, PrevArrow } from "./Icon";
export const NavButton = (props) => {
  return (
    <button
      className={` ${props.class} py-4 px-[28.21px] text-white text-base buttonbg leading-6 font-inter font-medium `}
    >
      {props.text}
    </button>
  );
};
export const MessageButton = (props) => {
  return (
    <div
      className={`${props.main} bg-bgButton p-[2px] hover:shadow-[-4px_0_12px_-2px_#1A54D0,4px_0_12px_-2px_#8603C4] duration-300 rounded-[63px] w-full max-w-[452px]`}
    >
      <a
        href="#"
        className={`${props.child} px-[9px] py-[6px] bg-white rounded-[62px] flex items-center gap-1`}
      >
        <span>
          <img
            src={gradiantMessage}
            alt="gradiantMessage"
            className=" max-w-[50px] w-full lg:min-w-[50px]"
          />
        </span>
        <span className=" bg-bgButton bg-clip-text text-transparent font-medium text-sm sm:text-base leading-5 sm:leading-6 font-inter">
          {props.text}
        </span>
      </a>
    </div>
  );
};
export const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className=" flex  gap-[42px] items-center">
        <button onClick={() => swiper.slidePrev()}>
          <PrevArrow />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <NextArrow />
        </button>
      </div>
    </>
  );
};
