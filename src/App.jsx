import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import { usePreloader } from "./components/common/Hooks";
import About from "./components/page/About";
import BackToTop from "./components/page/BackToTop";
import Client from "./components/page/Client";
import Fault from "./components/page/Fault";
import Fight from "./components/page/Fight";
import Footer from "./components/page/Footer";
import Goal from "./components/page/Goal";
import Header from "./components/page/Header";
import Mindset from "./components/page/Mindset";
import Nonbinding from "./components/page/Nonbinding";
import Over from "./components/page/Over";
import Preloader from "./components/page/Preloader";
import Target from "./components/page/Target";
import Youget from "./components/page/Youget";
import React, { useEffect } from "react";

function App() {
  const isLoading = usePreloader();
  const scrollRef = React.createRef();
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  });
  return (
    <div className=" max-w-[1920px] mx-auto ">
      <div className="scroll" ref={scrollRef}>
        {isLoading && <Preloader />}
        <Header />
        <Fault />
        <Fight />
        <Youget />
        <Goal />
        <Target />
        <Mindset />
        <Over />
        <About />
        <Client />
        <Nonbinding />
        <BackToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
