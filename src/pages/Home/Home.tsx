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
  const accordionItems = [
    {
      title: "What is a mechanical keyboard?",
      content:
        "A mechanical keyboard uses individual mechanical switches for each key, providing superior tactile feedback compared to other types of keyboards.",
    },
    {
      title: "What are the benefits of mechanical keyboards?",
      content:
        "Mechanical keyboards offer a more durable build, better typing experience, customizable keys, and often faster response times.",
    },
    {
      title: "Are mechanical keyboards louder?",
      content:
        "Yes, mechanical keyboards can be louder than membrane keyboards, but many switch types offer quieter options like Cherry MX Silent or Gateron Silent switches.",
    },
    {
      title: "What are the benefits of mechanical keyboards?",
      content:
        "Mechanical keyboards offer a more durable build, better typing experience, customizable keys, and often faster response times.",
    },
    {
      title: "Are mechanical keyboards louder?",
      content:
        "Yes, mechanical keyboards can be louder than membrane keyboards, but many switch types offer quieter options like Cherry MX Silent or Gateron Silent switches.",
    },
  ];
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
        <Accordion  items={accordionItems}/>
        <Review></Review>
      </div>
    </>
  );
};

export default Home;
