"use client";

import Navbar from "@/components/layout/Navbar";

export default function AdminPage() {

    const bookings = [
        {
            customer: "Firdaus",
            service: "Oil Change",
            date: "12 May 2026",
            status: "Pending",
            mechanic: "Not Assigned",
            bill: 850,
        },
        {
            customer: "Hakim",
            service: "Brake Inspection",
            date: "18 May 2026",
            status: "Completed",
            mechanic: "Mazlan",
            bill: 480,
        },
    ];

    const totalBookings = bookings.length;

    const completedBookings = bookings.filter(
        (booking) => booking.status === "Completed"
    ).length;

    const pendingBookings = bookings.filter(
        (booking) =>
            booking.status === "Pending" ||
            booking.status === "In Progress"
    ).length;

    const totalRevenue = bookings.reduce(
        (total, booking) => total + booking.bill,
        0
    );

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-100 p-8">

                <div className="max-w-7xl mx-auto">

                    <h1 className="text-4xl font-bold mb-2">
                        Admin Dashboard
                    </h1>

                    <p className="text-gray-500 mb-8">
                        Manage customer bookings and workshop operations.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6 mt-8 mb-8">

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-gray-500 text-sm">
                                Total Bookings
                            </h2>

                            <p className="text-3xl font-bold mt-2">
                                {totalBookings}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-gray-500 text-sm">
                                Completed Services
                            </h2>

                            <p className="text-3xl font-bold text-green-500 mt-2">
                                {completedBookings}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-gray-500 text-sm">
                                Active Jobs
                            </h2>

                            <p className="text-3xl font-bold text-orange-500 mt-2">
                                {pendingBookings}
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h2 className="text-gray-500 text-sm">
                                Revenue
                            </h2>

                            <p className="text-3xl font-bold text-blue-500 mt-2">
                                RM{totalRevenue}
                            </p>
                        </div>

                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <table className="w-full">

                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-4">Customer</th>
                                    <th className="text-left py-4">Service</th>
                                    <th className="text-left py-4">Date</th>
                                    <th className="text-left py-4">Status</th>
                                    <th className="text-left py-4">Mechanic</th>
                                    <th className="text-left py-4">Bill</th>
                                </tr>
                            </thead>

                            <tbody>

                                {bookings.map((booking, index) => (

                                    <tr
                                        key={index}
                                        className="border-b"
                                    >

                                        <td className="py-4">
                                            {booking.customer}
                                        </td>

                                        <td>
                                            {booking.service}
                                        </td>

                                        <td>
                                            {booking.date}
                                        </td>

                                        <td>

                                            <select
                                                className={`px-3 py-1 rounded-lg font-semibold border
                                                ${
                                                    booking.status === "Completed"
                                                        ? "text-green-500"
                                                        : booking.status === "In Progress"
                                                        ? "text-blue-500"
                                                        : "text-orange-500"
                                                }`}
                                                defaultValue={booking.status}
                                            >

                                                <option value="Pending">
                                                    Pending
                                                </option>

                                                <option value="In Progress">
                                                    In Progress
                                                </option>

                                                <option value="Completed">
                                                    Completed
                                                </option>

                                            </select>

                                        </td>

                                        <td>

                                            <select
                                                className="border rounded-lg px-3 py-1"
                                                defaultValue={booking.mechanic}
                                            >

                                                <option value="Not Assigned">
                                                    Not Assigned
                                                </option>

                                                <option value="Mazlan">
                                                    Mazlan
                                                </option>

                                                <option value="Junaidi">
                                                    Junaidi
                                                </option>

                                                <option value="Hafiz">
                                                    Hafiz
                                                </option>

                                                <option value="Aiman">
                                                    Aiman
                                                </option>

                                            </select>

                                        </td>

                                        <td className="text-orange-500 font-semibold">
                                            RM{booking.bill}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </>
    );
}