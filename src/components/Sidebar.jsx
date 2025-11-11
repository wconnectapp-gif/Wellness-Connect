import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TfiImport } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";

export function Sidebar() {
return (
<div className="w-64 bg-white border-r p-5 flex flex-col justify-between h-screen">
<div>
<h2 className="text-2xl font-bold mb-6">Wellness Connect</h2>
<nav className="space-y-4">
<a className="flex items-center gap-2 text-green-600 font-medium" href="#"> <MdOutlineDashboard />Dashboard Overview</a>
<a className="flex items-center gap-2 text-gray-600" href="#"><SlCalender />All Bookings</a>
<a className="flex items-center gap-2 text-gray-600" href="#"><TfiImport />Export Data</a>
<a className="flex items-center gap-2 text-gray-600" href="#"><CiSettings />Settings</a>
</nav>
</div>


<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-gray-300 rounded-full" />
<div>
<p className="font-medium">Admin Name</p>
<p className="text-sm text-gray-500">Administrator</p>
</div>
</div>
</div>
);
}
