import React from "react";

interface SuccessCardProps {
  message: string;
  onSuccess: () => void;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ onSuccess, message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4 text-center">{message}</h2>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none"
            onClick={onSuccess}
          >
            Oke
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
