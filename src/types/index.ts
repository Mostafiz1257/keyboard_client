
export interface Product {
    _id: string;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    rating: number;
    description: string;
    image: string;
  }
  export interface RootState {
    cart: {
      items: Product[];
    };
  }

  export interface GetProductsResponse {
    products: Product[];
  }
  
  // Type for the mutation function
 export  interface AddProductResponse {
    success: boolean;
    product: Product;
  }