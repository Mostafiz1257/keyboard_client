
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mechanicalkeyboardserverside.vercel.app/api" }),
  tagTypes: ["products"], 
  endpoints: (builder) => ({
  
    getAllProducts: builder.query({
      query: () => 'products',
      providesTags: ["products"],
    }),
    
    
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),

    
    addProducts: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"], 
    }),

  
    updateProduct: builder.mutation({
      query: ({ id, updateData }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["products"], 
    }),

   
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"], 
    }),

 
    decreaseProductQuantity: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body:  {quantity} ,
      }),
      invalidatesTags: ["products"], 
    }),
  }),
});

export const {
  useAddProductsMutation,
  useGetProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetAllProductsQuery,
  useDecreaseProductQuantityMutation,
} = baseApi;
