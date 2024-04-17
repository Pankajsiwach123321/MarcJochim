import { LogoFooter } from "../common/Icon";

const Preloader = () => {
  return (
    <div>
      <div className=" min-h-screen fixed top-0 left-0 bg-black z-[100] w-full flex flex-col gap-5 justify-center items-center">
        <LogoFooter />
        <div className="w-20 relative z-[1] after:absolute after:bg-white after:w-3 after:h-3 after:rounded-full after:z-[-1] after:top-0 after:left-0 h-20 bg-black animate-spin border border-[#F77B0B] before:absolute  before:right-0 before:bottom-0 before:w-3 before:h-3 before:rounded-full before:bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Preloader;
