import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

export function BookingsList() {
  const bookings = [
    { id: "#BK1024", client: "Ayodeji Doe", service: "Deep Tissue Massage", date: "2023-10-28, 2:00 PM", status: "Confirmed" },
    { id: "#BK1020", client: "olayinka olayinka", service: "Aromatherapy Session", date: "2023-10-30, 3:00 PM", status: "Cancelled" },
    { id: "#BK1023", client: "John Smith", service: "Acupuncture Session", date: "2023-10-29, 11:00 AM", status: "Pending" },
    { id: "#BK1022", client: "Emily Johnson", service: "Yoga Class", date: "2023-10-25, 6:00 PM", status: "Completed" },
    { id: "#BK1021", client: "Michael Brown", service: "Meditation Workshop", date: "2023-11-01, 10:00 AM", status: "Confirmed" },
    { id: "#BK1025", client: "Sarah Davis", service: "Reflexology Session", date: "2023-11-02, 1:00 PM", status: "Pending" },
    { id: "#BK1026", client: "David Wilson", service: "Spa Treatment", date: "2023-11-03, 4:00 PM", status: "Confirmed" },
    { id: "#BK1027", client: "Laura Martinez", service: "Chiropractic Adjustment", date: "2023-11-04, 9:00 AM", status: "Cancelled" },
    { id: "#BK1028", client: "James Anderson", service: "Wellness Coaching", date: "2023-11-05, 2:30 PM", status: "Completed" },
    { id: "#BK1029", client: "Linda Taylor", service: "Nutritional Counseling", date: "2023-11-06, 11:30 AM", status: "Confirmed" },
    { id: "#BK1030", client: "Robert Thomas", service: "Holistic Therapy", date: "2023-11-07, 5:00 PM", status: "Pending" },
    
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalItems = bookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const currentBookings = bookings.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">All Bookings</h2>
        <button className="bg-green-600 flex items-center gap-2 text-white font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-green-700 transition">
          <FaPlus /> New Booking
        </button>
      </div>

      {/* Table */}
      <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
        <thead>
          <tr className="text-left border-b text-green-900 uppercase text-sm">
            <th className="p-4">Booking ID</th>
            <th className="p-4">Client Name</th>
            <th className="p-4">Service</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentBookings.map((book) => (
            <tr key={book.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-4">{book.id}</td>
              <td className="p-4">{book.client}</td>
              <td className="p-4">{book.service}</td>
              <td className="p-4">{book.date}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    book.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : book.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {book.status}
                </span>
              </td>
              <td className="p-4 flex gap-3 items-center ">
                <button><FaEdit className="text-green-600 cursor-pointer" /></button>
                <button><FaTrash className="text-red-600 cursor-pointer" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Dynamic Pagination */}
      <div className="flex justify-between items-center mt-3">
        {/* Showing count */}
        <p className="text-green-700 text-sm">
          Showing {startIndex + 1}-{endIndex} of {totalItems}
        </p>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border rounded-md text-sm ${
              currentPage === 1
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "text-gray-700"
            }`}
          >
            Previous
          </button>

          <span className="px-3 py-1 border rounded-md text-sm text-gray-700">
            {currentPage}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 border rounded-md text-sm ${
              currentPage === totalPages
                ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                : "text-gray-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
