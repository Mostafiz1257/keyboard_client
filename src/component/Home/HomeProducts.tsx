import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import ProductCard from "../ProductCard";
import SectionHeader from "@/utils/SectionHeader";
import { Product } from "@/types";
import Loading from "../Loading";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.products || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <SectionHeader
        headTag={"Top Rated Keyboards"}
        underTag={"Now it's your turn to choose the best"}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.slice(0, 6).map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='flex items-center justify-center pt-5 '>
        <Link to='/products'>
          <button className='inline-block pointer px-4 py-2 border border-yellow-400 rounded-full text-gray-700 hover:bg-yellow-500  hover:text-white transition-colors duration-200'>
            View Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
