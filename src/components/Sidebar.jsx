import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiImport } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

export function Sidebar({ active = "dashboard" }) {
  return (
    <div className="w-64 bg-white border-r p-5 flex flex-col justify-between h-screen">

      <div>
        <h2 className="text-2xl font-bold mb-6 text-black">
          Wellness Connect
        </h2>

        <nav className="space-y-2">

          <a
            href="#"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
              active === "dashboard"
                ? "bg-green-200 text-black"
                : "text-green-500 hover:text-gray-600"
            }`}
          >
            <MdOutlineDashboard />
            Dashboard Overview
          </a>

          <a
            href="/Booking"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-semibold ${
              active === "booking"
                ? "bg-green-200 text-black"
                : "text-green-600 hover:text-gray-500"
            }`}
          >
            <SlCalender />
            All Bookings
          </a>

          <a
            href="/Data"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-semibold ${
              active === "data"
                ? "bg-green-200 text-black"
                : "text-green-600 hover:text-gray-600"
            }`}
          >
            <TfiImport />
            Export Data
          </a>

          <a
            href="/Setting"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all font-semibold ${
              active === "settings"
                ? "bg-green-200 text-black"
                : "text-green-600 hover:text-gray-600"
            }`}
          >
            <CiSettings />
            Settings
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-3 pb-3">
        <div className="w-10 h-10 bg-yellow-700 rounded-full flex items-center justify-center">
          <FaUser className="text-2xl text-white" />
        </div>
        <div>
          <p className="font-medium text-black">Admin Name</p>
          <p className="text-sm text-gray-500">Administrator</p>
        </div>
      </div>
    </div>
  );
}
