import React from 'react'
import { CiBellOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export function TopBar() {
  return (
    <div className="flex justify-between items-center mb-10">
      
      {/* Search Bar */}
      <div className="flex items-center  px-3 py-2 w-96">
        <FaSearch className="text-green-600 text-xl" />
        <input
          type="text"
          placeholder="Search bookings..."
          className="ml-2 w-full outline-none text-green-600 text-xl"
        />
      </div>

      {/* Profile section */}
    <div className="flex items-center gap-4">
  <div className="w-6 h-6  flex items-center justify-center">
    <CiBellOn className='text-2xl' />
  </div>
  
  <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
    <FaUser className='text-3xl text-white' />
  </div>
</div>


    </div>
  );
}

