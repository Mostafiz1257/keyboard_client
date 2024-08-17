
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard";
import SectionHeader from "@/utils/SectionHeader";

const HomeProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.products || [];

  return (
  
    <div>
        if(isLoading){
      <p>Loading</p>
    }
      <SectionHeader
        headTag={"Top Rated keyboard"}
        underTag={"Now is your tern"}
      ></SectionHeader>
      <div className="text-center">
        Here will come 6 keyboard card....!
       <div className="grid lg:grid-cols-4 gap-4">
       {products.slice(0,6).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
       </div>
      </div>
    </div>
  );
};

export default HomeProducts;
