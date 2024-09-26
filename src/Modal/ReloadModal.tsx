
import React from 'react';

interface ReloadModalProps {
  onClose: () => void;
}

const ReloadModal: React.FC<ReloadModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold">Warning</h2>
        <p>Your selected card will vanish after a reload.</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ReloadModal;
