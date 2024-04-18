import React from "react";
import { fightData } from "../common/Helper.jsx";

const Fight = () => {
  return (
    <section className=" bg-[url(./assets/images/fight.png)] bg-no-repeat bg-cover bg-center lg:bg-fullsize mt-[35px] after:absolute after:bg-[#003e9233]  after:inset-0 relative z-[1] after:z-[-1]">
      <div className="max-w-[1000px] mx-auto px-3">
        <div className="row max-sm:mx-0 md:justify-end justify-center">
          {fightData.slice(0, 3).map((data, index) => (
            <div
              data-aos={data.aos}
              key={index}
              className="sm:max-w-[250px] py-3 sm:py-0 w-full"
            >
              <div className=" bg-[#003e924d] backdrop-blur-sm hover:bg-[#003E92] duration-300 p-[42px_26px] h-full min-h-[162px]">
                <p className=" font-poppines text-base font-normal leading-[25.6px] text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="row max-sm:mx-0 mt-[29px] justify-center md:justify-start">
          {fightData.slice(3).map((data, index) => (
            <div
              data-aos={data.aos}
              key={index}
              className="sm:max-w-[250px] py-3 sm:py-0 w-full"
            >
              <div className=" bg-[#003e924d]  backdrop-blur-sm hover:bg-[#003E92] duration-300 p-[42px_26px] h-full min-h-[169px]">
                <p className=" font-poppines text-base font-normal leading-[25.6px] text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fight;
