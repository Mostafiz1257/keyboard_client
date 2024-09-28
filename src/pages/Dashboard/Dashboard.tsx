import { useState } from "react";
import { useDeleteProductMutation, useGetAllProductsQuery } from "@/redux/api/baseApi";
import { FaEdit, FaTrash } from "react-icons/fa";
import {  Product } from "@/types";
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";
import DeleteProductModal from "./DeleteProductModal";
import Loading from "@/component/Loading";

const Dashboard = () => {
  const { data } = useGetAllProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  const products: Product[] = data?.products || [];
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);
  const toggleUpdateModal = () => setIsUpdateModalOpen(!isUpdateModalOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen);

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    toggleUpdateModal();
  };

  const handleDeleteClick = (product: Product) => {
    setSelectedProduct(product);
    toggleDeleteModal();
  };

  return (
    <div  className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-yellow-400">Product Dashboard</h1>

      <button
        className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 mb-6"
        onClick={toggleAddModal}
      >
        Add Product
      </button>

      {products?.length ? (
        <table  data-aos="fade-up"
        data-aos-duration="2000" className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-black text-yellow-400">
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Brand</th>
              <th className="py-3 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{product.name}</td>
                <td className="py-3 px-6 text-left">${product.price}</td>
                <td className="py-3 px-6 text-left">{product.brand}</td>
                <td className="py-3 px-6 text-right flex justify-end space-x-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="text-yellow-400 hover:text-yellow-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(product)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        
        <Loading/>
      )}

     
      {isAddModalOpen && <AddProductModal isOpen={isAddModalOpen} toggleModal={toggleAddModal} />}
      {isUpdateModalOpen && selectedProduct && (
        <UpdateProductModal
          isOpen={isUpdateModalOpen}
          toggleModal={toggleUpdateModal}
          product={selectedProduct}
        />
      )}
      {isDeleteModalOpen && selectedProduct && (
        <DeleteProductModal
          isOpen={isDeleteModalOpen}
          toggleModal={toggleDeleteModal}
          productId={selectedProduct._id}
          deleteProduct={deleteProduct}
        />
      )}
    </div>
  );
};

export default Dashboard;
