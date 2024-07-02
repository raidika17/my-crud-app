"use client";

import { useEffect, useState } from "react";
import SearchInput from "./search";
import { useRouter } from "next/navigation";
import ConfirmationCard from "./confirmationCard";
import { deleteUser } from "@/lib/actions";

interface Data {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface DataProps {
  data: Data[];
}

const Table: React.FC<DataProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPagination, setShowPagination] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const rowsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    if (data.length >= rowsPerPage) {
      setShowPagination(true);
    }
  }, [data.length]);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current page data
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => handleClick(number)}
        className={`px-3 py-1 border rounded border-green-500 ${
          currentPage === number
            ? "bg-green-500 text-white"
            : "bg-white text-green-500"
        }`}
      >
        {number}
      </button>
    ));
  };

  const handleConfirmDelete = () => {
    deleteUser(id);
    window.location.reload();
  };

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const handleEdit = (data: any) => {
    const queryString = new URLSearchParams(data).toString();
    router.push(`/edit_user/destination?${queryString}`);
  };

  const handleDelete = (id: string, name: string) => {
    setShowConfirmation(true);
    setName(name);
    setId(id);
  };

  return (
    <div className="container rounded-lg border-spacing-14 border-2 border-green-500 lg:w-3/4 mx-auto shadow-lg p-10 mb-12">
      <SearchInput />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Number Phone</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentData.map((value, index) => (
              <tr key={value.id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{value.name}</td>
                <td className="py-2 px-4 border-b">{value.email}</td>
                <td className="py-2 px-4 border-b">{value.phone}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(value)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(value.id, value.name)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {showPagination && renderPageNumbers()}
      </div>
      {showConfirmation && (
        <ConfirmationCard
          message={`Are you sure you want to delete "${name}" ?`}
          onCancel={handleCancel}
          onDelete={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default Table;
