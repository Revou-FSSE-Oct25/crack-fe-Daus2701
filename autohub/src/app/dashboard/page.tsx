"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("autohubUser");

    if (!user) {
      router.push("/login");
    }
  }, []);

    const [bookings, setBookings] = useState([
        {
            service: "Oil Change",
            date: "12 May 2026",
            status: "Completed",
            mechanic: "John",
        },

        {
            service: "Brake Inspection",
            date: "18 May 2026",
            status: "Upcoming",
            mechanic: "Michael",
        },
    ]);

    const [newBooking, setNewBooking] = useState({
        service: "",
        date: "",
    });

    const handleBooking = () => {
        if (!newBooking.service || !newBooking.date) return;

        const booking = {
            service: newBooking.service,
            date: newBooking.date,
            status: "Upcoming",
            mechanic: "Pending",
        };

        setBookings([...bookings, booking]);

        setNewBooking({
            service: "",
            date: "",
        });
    };

    const services = [
        {
            name: "Oil Change",
            price: 120,
        },
        {
            name: "Tyre Change",
            price: 780,
        },
        {
            name: "Battery Replacement",
            price: 250,
        },
        {
            name: "Brake Inspection",
            price: 100,
        },
        {
            name: "AC Service",
            price: 150,
        },
        {
            name: "Engine Diagnostic",
            price: 200,
        },
    ];

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-8">

        <div className="max-w-7xl mx-auto">

            {/* PAGE TITLE */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                    Customer Dashboard
                </h1>

                <p className="text-gray-500 mt-2">
                    Manage your vehicles, bookings, and service history.
                </p>
            </div>

            {/* TOP GRID */}
            <div className="grid md:grid-cols-3 gap-6">

            {/* VEHICLE CARD */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                    My Vehicle
                </h2>

                <div className="space-y-2 text-gray-600">
                    <p><span className="font-medium">Car:</span> Honda Mobilio</p>
                    <p><span className="font-medium">Plate:</span> AB1234UT</p>
                    <p><span className="font-medium">Mileage:</span> 48,000 KM</p>
                </div>
            </div>

            {/* NEXT SERVICE */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                    Next Service
                </h2>

                <div className="space-y-2">
                    <p className="text-gray-600">
                        Oil Change Service
                    </p>

                    <p className="text-orange-500 font-bold text-2xl">
                        Due in 2,000 KM
                    </p>

                    <p className="text-sm text-gray-400">
                        Recommended at 50,000 KM
                    </p>
                </div>
            </div>

            {/* QUICK STATS */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">
                    Quick Stats
                </h2>

                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span>Total Services</span>
                        <span className="font-bold">12</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Upcoming Booking</span>
                        <span className="font-bold">1</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Vehicle Status</span>
                        <span className="text-green-500 font-semibold">
                            Good
                        </span>
                    </div>
                </div>
            </div>

        </div>


        {/* RECENT BOOKINGS */}
        <div className="bg-white mt-8 p-6 rounded-2xl shadow-md">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                    Recent Bookings
                </h2>

                <Link
                    href="/booking"
                    className="bg-orange-500 text-white px-5 py-2 rounded-lg"
                >
                    New Booking
                </Link>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b">
                            <th className="py-3">Service</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Mechanic</th>
                        </tr>
                    </thead>

                    <tbody>

                        {bookings.map((booking, index) => (
                            <tr key={index} className="border-b">

                                <td className="py-4">
                                    {booking.service}
                                </td>

                                <td>
                                    {booking.date}
                                </td>

                                <td
                                    className={
                                        booking.status === "Completed"
                                            ? "text-green-500 font-medium"
                                            : "text-orange-500 font-medium"
                                    }
                                >
                                    {booking.status}
                                </td>

                                <td>
                                    {booking.mechanic}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    </div>

</div>
    </>
  );
}