import Accordion from "@/component/Home/Accordion"
import Advartisement from "@/component/Home/Advartisement"
import HeroSection from "@/component/Home/HeroSection"
import HomeProducts from "@/component/Home/HomeProducts"
import Review from "@/component/Home/Review"
import TopBrand from "@/component/Home/TopBrand"
import WhyUs from "@/component/Home/WhyUs"


const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Advartisement></Advartisement>
      <HomeProducts></HomeProducts>
      <TopBrand></TopBrand>
      <Review></Review>
      <Accordion></Accordion>
      <WhyUs></WhyUs>
      
    </>
  )
}

export default Home
