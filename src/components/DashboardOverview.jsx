import React from 'react'

export function DashboardOverview() {
const stats = [
{ title: "Total Bookings", value: "1,234", change: "+5.2% this month", color: "text-green-600" },
{ title: "Upcoming Appointments", value: "56", change: "+10% this week", color: "text-green-600" },
{ title: "Completed", value: "987", change: "-1.5% this month", color: "text-red-600" },
{ title: "Pending", value: "45", change: "+2.0% this week", color: "text-green-600" }
];


return (
<div className="mb-10">
<h1 className="text-3xl  font-bold">Dashboard Overview</h1>
<p className="text-green-900 mb-6">Welcome back, Admin! Here's what's happening today.</p>


<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{stats.map((item) => (
<div className="bg-white p-6 rounded-xl shadow-sm" key={item.title}>
<p className="text-gray-600">{item.title}</p>
<h2 className="text-3xl font-bold">{item.value}</h2>
<p className={`text-sm ${item.color}`}>{item.change}</p>
</div>
))}
</div>
</div>
);
}

export default DashboardOverview
