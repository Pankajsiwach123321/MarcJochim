import { useEffect, useState } from "react";
import { Backtotop } from "../common/Icon";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    isVisible && (
      <div onClick={scrollToTop} className="fixed z-30  bottom-3 right-3">
        <button className="rounded-full bg-white duration-300 shadow-[0_0_20px_1px_#8F61E7] group z-50 w-10 sm:w-12 h-10 sm:h-12   flex items-center justify-center hover:shadow-[0_0_0_4px_rgba(180,160,255,0.253)]">
          <Backtotop />
        </button>
      </div>
    )
  );
};

export default BackToTop;
