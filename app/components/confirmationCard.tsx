import React from "react";

interface ConfirmationCardProps {
  message: string;
  onDelete: () => void;
  onCancel: () => void;
}

const ConfirmationCard: React.FC<ConfirmationCardProps> = ({
  message,
  onDelete,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
            onClick={onCancel}
          >
            No
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
            onClick={onDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
