import React from 'react'

export function BookingsList() {
const bookings = [
{ id: "#BK1024", client: "Jane Doe", service: "Deep Tissue Massage", date: "2023-10-28, 2:00 PM", status: "Confirmed" },
{ id: "#BK1023", client: "John Smith", service: "Acupuncture Session", date: "2023-10-29, 11:00 AM", status: "Pending" },
{ id: "#BK1022", client: "Emily Johnson", service: "Yoga Class", date: "2023-10-25, 6:00 PM", status: "Completed" },
{ id: "#BK1021", client: "Michael Brown", service: "Meditation Workshop", date: "2023-11-01, 10:00 AM", status: "Confirmed" }
];


return (
<div>
<div className="flex justify-between items-center mb-4">
<h2 className="text-2xl font-bold">All Bookings</h2>
<button className="bg-green-600 text-white px-4 py-2 rounded-lg">+ New Booking</button>
</div>


<table className="w-full bg-white rounded-xl shadow-sm">
<thead>
<tr className="text-left text-gray-600 border-b">
<th className="p-4">Booking ID</th>
<th className="p-4">Client Name</th>
<th className="p-4">Service</th>
<th className="p-4">Date</th>
<th className="p-4">Status</th>
<th className="p-4">Actions</th>
</tr>
</thead>


<tbody>
{bookings.map((book) => (
<tr className="border-b" key={book.id}>
<td className="p-4">{book.id}</td>
<td className="p-4">{book.client}</td>
<td className="p-4">{book.service}</td>
<td className="p-4">{book.date}</td>
<td className="p-4">
<span
className={`px-3 py-1 text-sm rounded-full ${
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
<td className="p-4 flex gap-3">
<span className="text-green-600 cursor-pointer">Edit</span>
<span className="text-red-600 cursor-pointer">Delete</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}

