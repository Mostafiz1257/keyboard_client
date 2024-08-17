import Footer from "@/component/Home/Footer";
import Navbar from "@/component/Home/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="h-screen max-w-8xl mx-auto">
      <Navbar></Navbar>

      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
