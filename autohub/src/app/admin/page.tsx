"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";

export default function AdminPage() {

    const [bookings, setBookings] = useState<any[]>([]);

    useEffect(() => {
        const storedBookings = JSON.parse(
            localStorage.getItem("bookings") || "[]"
        );

        setBookings(storedBookings);
    }, []);

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

    const updateBooking = (
        index: number,
        field: string,
        value: string
    ) => {
        const updatedBookings = [...bookings];

        updatedBookings[index] = {
            ...updatedBookings[index],
            [field]: value,
        };

        setBookings(updatedBookings);

        localStorage.setItem(
            "bookings",
            JSON.stringify(updatedBookings)
        );
    };

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
                                                value={booking.status}
                                                onChange={(e) =>
                                                    updateBooking(index, "status", e.target.value)
                                                }
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
                                                value={booking.mechanic}
                                                onChange={(e) =>
                                                    updateBooking(index, "mechanic", e.target.value)
                                                }
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