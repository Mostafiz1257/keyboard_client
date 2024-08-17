// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ searchTerm, minPrice, maxPrice, sortBy }) => ({
        url: "/products",
        params: { searchTerm, minPrice, maxPrice, sortBy },
      }),
      providesTags: ["products"],
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
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
    searchAndFilterProducts: builder.mutation({
      query: ({ searchQuery, filters }) => ({
        url: "/products/search",
        method: "POST",
        body: { searchQuery, filters },
      }),
    }),
  }),
});

export const {
  useAddProductsMutation,
  useGetProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetAllProductsQuery,
  useSearchAndFilterProductsMutation
} = baseApi;
