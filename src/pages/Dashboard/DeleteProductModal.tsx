import { toast } from "sonner";

interface DeleteProductModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  productId: string;
  deleteProduct: (_id: string) => Promise<any>;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  isOpen,
  toggleModal,
  productId,
  deleteProduct,
}) => {
  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
      toast.success("Product deleted successfully");
      toggleModal();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.warning("something is wrong");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Confirm Delete</h2>
        <p>Are you sure you want to delete this product?</p>
        <div className='flex justify-end space-x-4 mt-6'>
          <button
            type='button'
            onClick={toggleModal}
            className='bg-gray-300 text-black py-2 px-4 rounded'
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={handleDelete}
            className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
