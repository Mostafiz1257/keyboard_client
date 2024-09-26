import { useState } from "react";
import { Product } from "@/types";
import { useUpdateProductMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

interface UpdateProductModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  product: Product;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({ isOpen, toggleModal, product }) => {
  const [productData, setProductData] = useState<Omit<Product, "_id">>({
    name: product.name,
    brand: product.brand,
    price: product.price,
    quantity: product.quantity,
    rating: product.rating,
    description: product.description,
    image: product.image,
  });

  const [updateProduct] = useUpdateProductMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setProductData((prevData) => ({
      ...prevData,
      [name]:
        name === "price" || name === "quantity" || name === "rating"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateProduct({ id: product._id, updateData: productData });
      toast.success('product updated successfully')
      toggleModal();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl transition-transform duration-300 transform">
        <h2 className="text-xl font-bold mb-4">Update Product</h2>

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
          </div>

          <div className="flex justify-end space-x-4">
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
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
