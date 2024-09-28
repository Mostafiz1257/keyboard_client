import Accordion from "@/component/Home/Accordion";
import AdvertisementSection from "@/component/Home/AdvertisementSection";
import CountdownTimer from "@/component/Home/CountdownTimer";

import HeroSection from "@/component/Home/HeroSection";
import HomeProducts from "@/component/Home/HomeProducts";
import Review from "@/component/Home/Review";
import TopBrand from "@/component/Home/TopBrand";
import WhyUs from "@/component/Home/WhyUs";
import SectionHeader from "@/utils/SectionHeader";

const Home = () => {
  
  const targetDate = new Date("2024-12-31T23:59:59");
  return (
    <>
  
      <HeroSection></HeroSection>
      <CountdownTimer targetDate={targetDate} />
      <HomeProducts></HomeProducts>
      <AdvertisementSection />
      <TopBrand></TopBrand>
      <WhyUs></WhyUs>
      <div className='p-6'>
        <SectionHeader
          headTag='F&Q'
          underTag='Explore our best-selling and take our services'
        />
        <Accordion />
        <Review></Review>
      </div>
    </>
  );
};

export default Home;
