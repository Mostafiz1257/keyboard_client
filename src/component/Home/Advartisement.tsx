import SectionHeader from "@/utils/SectionHeader";
import { BsTelephone } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
const Advartisement = () => {
  return (
    <>
      <SectionHeader
        headTag={"Don,t miss Today's offer"}
        underTag={"Untill today 110:00 pm"}
      ></SectionHeader>
   <div className="flex justify-center items-center ">
   <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ">
        <div className="bg-pink-200 py-8 px-[100px]">
          <p>
            <BsTelephone className="text-3xl"></BsTelephone>
          </p>
          <p className="pt-3 font-bold">
            <span className="font-bold">24/7</span> support fou you
          </p>
          <p className="text-gray-400">Ready fo you</p>
        </div>
        <div className="bg-pink-200 py-8 px-[100px]">
          <p>
            <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
          </p>
          <p className="pt-3 font-bold">
            <span className="font-bold"></span> Delivary just time
          </p>
          <p className="text-gray-400">Anywhere in the country</p>
        </div>
        <div className="bg-pink-200 py-8 px-[100px]">
          <p>
            <GiPayMoney className="text-3xl"></GiPayMoney>
          </p>
          <p className="pt-3 font-bold">
            <span className="font-bold"></span> Cash on delivary
          </p>
          <p className="text-gray-400">Get your product first</p>
        </div>
      </div>
   </div>
    </>
  );
};

export default Advartisement;
