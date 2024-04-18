import React from "react";
import { Call, ElippesHeader, Logo } from "../common/Icon";
import { MessageButton, NavButton } from "../common/Button";
import { useOverflowHidden } from "../common/Hooks";
import { Twirl as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useOverflowHidden(false);
  return (
    <header
      id="home"
      className=" min-h-[810px] flex-col relative z-[1] flex  bg-[url(./assets/images/herobg.png)] bg-left-top md:bg-fullsize bg-no-repeat"
    >
      <nav className=" pt-[26px]">
        <div className=" max-w-content  px-3 mx-auto">
          <ul className=" flex justify-between items-center">
            <li>
              <a href="#home">
                <Logo />
              </a>
            </li>
            <li
              className={` ${
                isOpen ? "right-0" : "-right-full"
              } flex max-sm:fixed max-sm:top-0 max-sm:justify-center max-sm:bg-white md:bg-full bg-cover max-sm:h-full max-sm:w-full max-sm:z-30 max-sm:duration-300 max-sm:flex-col gap-10 items-center `}
            >
              <a
                href="#benifits"
                className=" ff-neue font-semibold text-base leading-[20.61px] lg:text-white-100 duration-300 hover:text-black"
              >
                Benifits
              </a>
              <a
                href="#testimonials"
                className=" ff-neue font-semibold text-base leading-[20.61px] lg:text-white-100 duration-300 hover:text-black"
              >
                Testimonials
              </a>
              <a href="#home">
                <NavButton text="Book Consultation Now" />
              </a>
            </li>
            <li className="relative z-[110] mx-2 sm:mx-3 sm:hidden">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={26}
                rounded
                distance="sm"
                direction="right"
                duration={0.5}
                color="#000"
              />
            </li>
          </ul>
        </div>
      </nav>
      <main className=" flex-grow w-full flex items-center">
        <div className=" max-w-content w-full relative z-[1] text-center sm:text-start  px-3 mx-auto">
          <div className=" flex flex-col md:flex-row md:items-end gap-0 lg:gap-[128px]">
            <div data-aos="fade-down" data-aos-delay="3000">
              <span className=" text-lg leading-6 text-orange-white-100 ff-neue font-normal">
                Marc joachim hubrich
              </span>
              <h1 className=" ff-neue font-normal text-6xl leading-[77px]">
                Now I let you
                <br />
                Go!
              </h1>
              <p className=" pt-2 font-poppines font-normal text-base leading-[25px] text-gray-white-100 mx-auto sm:mx-0 max-w-[517px]">
                For women who do not want to be completely dragged down by a
                SEPARATION. <br /> How to let go of your EX so you can leave him
                behind without having to run to a therapist right away.
              </p>
              <div className="mt-8 flex items-center justify-center sm:justify-start gap-2 lg:gap-[17px]">
                <MessageButton text="Book a non-binding initial consultation now" />
                <a
                  className=" hover:animate-spin-slow"
                  href="tel:+919992148553"
                >
                  <Call />
                </a>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="3000"
              className=" flex items-start justify-center sm:justify-start gap-[13px] !translate-y-6  md:!translate-y-[133px]"
            >
              <span className=" bg-[#9800B0] h-[74px] w-[1.5px] mt-1"></span>
              <p className="ff-neue max-w-[140px] font-normal text-base leading-[27px] md:text-white">
                Die wichtigsten Aspekte einer Trennung:
              </p>
              <ul>
                <li className=" list-disc font-poppines font-medium text-base leading-[25px] md:text-white">
                  physische Trennung
                </li>
                <li className=" list-disc font-poppines font-medium text-base leading-[25px] md:text-white pt-[2px]">
                  mentale Trennung
                </li>
              </ul>
            </div>
          </div>
          <div className=" absolute z-[-1] left-[50%] sm:left-0 translate-x-[-50%] sm:translate-x-0 bottom-[-20%] sm:bottom-[-60%] lg:bottom-[-94%] xl:left-[-1%]">
            <span className=" font-poppines text-start hidden sm:inline-block max-w-max sm:-rotate-90 font-light text-xl leading-[34px]">
              MJH
            </span>
            <div className=" flex sm:items-end items-start gap-1">
              <div className=" ml-5 sm:mt-[11px] w-[200px] sm:w-[26px] h-3 sm:h-40 lg:h-[269px] border-l-[2px] border-b-[2px] border-0 border-[#F77B0B]">
                {" "}
              </div>
              <div className=" flex items-end ">
                <p className=" ff-neue sm:-rotate-90 font-normal text-2xl sm:text-[40px]">
                  01
                </p>
                <p className=" ff-neue uppercase  font-normal text-2xl sm:translate-y-2 leading-[30px]">
                  fault
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <span className=" absolute z-[-1] top-0 left-0 w-[2px]">
        <ElippesHeader />
      </span>
    </header>
  );
};

export default Header;
