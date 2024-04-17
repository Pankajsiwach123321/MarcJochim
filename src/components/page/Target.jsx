import React from "react";

const Target = () => {
  return (
    <section className="md:pt-14 relative z-[1]">
      <div className=" bg-[#F2F8FF]">
        <div className="max-w-content mx-auto px-3 pt-12">
          <div className="row items-center">
            <div className="sm:w-8/12 w-full px-3">
              <h2 className=" ff-neue font-normal sm:pl-9 uppercase text-center  text-4xl lg:text-[52px] leading-[44px] lg:leading-[66px]">
                <span className="text-orange-white-100 ">TARGET</span> GROUP
              </h2>
            </div>
            <div className="sm:w-4/12 w-full pt-6 sm:pt-0 px-3">
              <p className=" border-l-[2px] mx-auto md:mx-0  pl-[11px] border-l-[#9800B0] text-base font-poppines leading-[25px] max-w-[350px] font-normal">
                The coaching is aimed at married women who have already
                separated or are thinking of separating.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[url(./assets/images/ring.png)] bg-no-repeat bg-cover bg-center md:bg-fullsize mt-[52px] ">
          <div className="max-w-content mx-auto px-3  relative z-[1] text-center md:text-start">
            <div className=" py-10 md:py-20 lg:py-[108px]">
              <div className=" h-full p-[40px_32px] bg-[#ffffff1f] max-w-[382px] mx-auto md:mx-0 lg:min-h-[187px]">
                <p className=" text-white font-poppines text-base leading-[25px]">
                  You have separated and have the feeling that you can never be
                  happy again and that you will be alone forever.
                </p>
              </div>
              <div className=" mt-8 h-full p-[40px_32px] bg-[#ffffff1f] max-w-[382px] mx-auto md:mx-0 lg:min-h-[187px]">
                <p className=" text-white font-poppines text-base max-w-[303px] leading-[25px]">
                  How are you supposed to be able to let go of someone who is so
                  entangled with your life? It's impossible, isn't it?
                </p>
              </div>
            </div>
            <div className=" p-[65px_28px_77px_39px] bg-[#003e92b3] mx-auto md:mx-0 md:absolute z-[-1] bottom-[-31px] right-8 backdrop-blur-sm md:ml-auto max-w-[338px] w-full">
              <p className=" text-white font-poppines text-base leading-[25px]">
                To understand how to let go of your partner, you need a detailed
                step-by-step action plan, which you will receive from me in a
                1:1 coaching session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Target;
