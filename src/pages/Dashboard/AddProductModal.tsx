import { useState } from "react";
import { useAddProductsMutation } from "@/redux/api/baseApi";
import axios from "axios";
import { Product } from "@/types";
import {  toast } from 'sonner'



interface AddProductModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, toggleModal }) => {
  const [productData, setProductData] = useState<Omit<Product, "_id">>({
    name: "",
    brand: "",
    price: 0,
    quantity: 0,
    rating: 0,
    description: "",
    image: "",
  });

  const [addProduct] = useAddProductsMutation();
  const [isUploading, setIsUploading] = useState(false);
 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "quantity" || name === "rating"
        ? parseFloat(value) // Convert to number
        : value,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setIsUploading(true);
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=63e5e5d08878e2104d3082bebc10b603",
        formData
      );
      setProductData({ ...productData, image: response.data.data.url });
      setIsUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addProduct(productData as Product);
     toast.success("Product added successfully")
     console.log("product data",productData);
      toggleModal();
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product!"); 
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto transition-transform duration-300 transform">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Product Name</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Brand */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Brand</label>
              <input
                type="text"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Price */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Price</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Rating</label>
              <input
                type="number"
                name="rating"
                value={productData.rating}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
                step="0.1"
                min="0"
                max="5"
              />
            </div>

            {/* Description */}
            <div className="mb-4 md:col-span-2">
              <label className="block text-sm font-semibold">Description</label>
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4 md:col-span-2">
              <label className="block text-sm font-semibold">Image</label>
              <input type="file" onChange={handleImageUpload} className="w-full p-2" required />
              {isUploading && <p>Uploading image...</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-300 text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
