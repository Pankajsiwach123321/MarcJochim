import React from "react";
import { NavButton } from "../common/Button";

const Over = () => {
  return (
    <section className=" bg-[url(./assets/images/exover.png)] bg-no-repeat bg-cover bg-center md:bg-fullsize relative z-[1] after:absolute after:bg-[#003e921a]  after:inset-0 after:z-[-1]">
      <div className="max-w-content mx-auto px-3">
        <div className="lg:py-[106px] py-10">
          <div className=" md:p-[50px_75px_42px_75px] p-5 backdrop-blur-sm bg-[#ffffff26] max-w-[778px] mx-auto">
            <h2
              data-aos="fade-down"
              className=" font-normal uppercase leading-[62px] text-2xl md:text-5xl lg:text-[52px] text-center text-white ff-neue"
            >
              Are you over your EX?
            </h2>
            <p
              data-aos="fade-down"
              className=" font-poppines font-normal text-base leading-[25px] pt-[9px] text-white text-center max-w-[585px] mx-auto"
            >
              Most women don't even realize how their past experiences affect
              their lives today. Assisting you to overcome this situation is
              what we do.
            </p>
            <NavButton
              class=" hover:text-white rounded-[68px] mx-auto flex mt-[31px] px-9"
              text="Let’s find it out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Over;
