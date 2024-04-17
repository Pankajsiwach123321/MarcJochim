import React from "react";
import { FaceBook, Instagram, LogoFooter, Mail, Twitter } from "../common/Icon";
import { LogoDataFooter } from "../common/Helper";

const Footer = () => {
  return (
    <footer className=" bg-no-repeat bg-fullsize bg-[url(./assets/images/footerbg.png)] overflow-hidden ">
      <div className="max-w-[1000px] flex flex-col justify-center relative  items-center py-24 flex-grow mx-auto px-3">
        <LogoFooter />
        <p className="text-base font-normal font-poppines text-center mx-auto leading-[25px] text-white pt-4 max-w-[264px]">
          (c)2024 MARC JOACHIM HUBRICH All Rights Reserved
        </p>
        <div className="flex flex-row sm:flex-col gap-3 mt-4 sm:mt-0 sm:absolute right-[30%] sm:right-3 bottom-[-25%] sm:top-[94px]">
          {LogoDataFooter.map((data, index) => (
            <a
              key={index}
              href={data.url}
              target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:scale-[0.9] duration-300"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
