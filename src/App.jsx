import { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const isLoading = usePreloader();
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className=" max-w-[1920px] mx-auto overflow-x-clip ">
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
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
