
import Footer from "@/component/Home/Footer";
import Navbar from "@/component/Home/Navbar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div className="h-screen max-w-8xl mx-auto ">
      <Provider store={store}>

      <Navbar></Navbar>
      <div className="pt-[65px] min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      </Provider>
    </div>
  );
};

export default Main;
