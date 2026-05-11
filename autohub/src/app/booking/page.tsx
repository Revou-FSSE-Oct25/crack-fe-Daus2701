"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";

export default function BookingPage() {
    
    const services = [
        {
            name: "Oil Change",
            price: 120,
        },
        {
            name: "AC Service",
            price: 150,
        },
        {
            name: "Brake Inspection",
            price: 100,
        },
        {
            name: "Tyre Change",
            price: 200,
        },
        {
            name: "Battery Replacement",
            price: 250,
        },
    ];

    const [cart, setCart] = useState<
        {
            name: string;
            price: number;
            quantity: number;
        }[]
    >([]);

    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [successMessage, setSuccessMessage] =
        useState("");

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const increaseQuantity = (name: string) => {
        setCart(
            cart.map((item) =>
                item.name === name
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                : item
            )
        );
    };

    const decreaseQuantity = (name: string) => {
        setCart(
            cart
                .map((item) =>
                    item.name === name
                        ? {
                            ...item,
                            quantity: item.quantity - 1,
                        }
                    : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const handleBooking = () => {

        if (cart.length === 0) {
            alert("Please select at least one service.");
            return;
        }

        if (!bookingDate || !bookingTime) {
            alert("Please select appointment date and time.");
            return;
        }

        const existingBookings = JSON.parse(
            localStorage.getItem("bookings") || "[]"
        );

        const newBookingData = {
            customer: "Firdaus",
            service: cart.map((item) => item.name).join(", "),
            date: bookingDate,
            status: "Pending",
            mechanic: "Not Assigned",
            bill: totalPrice,
        };

        localStorage.setItem(
            "bookings",
            JSON.stringify([...existingBookings, newBookingData])
        );

        setSuccessMessage(
            "Booking confirmed successfully!"
        );

        console.log({
            cart,
            bookingDate,
            bookingTime,
            totalPrice,
        });
    };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-8">

        <div className="max-w-6xl mx-auto">

            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                    Book Service
                </h1>

                <p className="text-gray-500 mt-2">
                    Select your services and schedule your appointment.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {services.map((service) => {

                    const isSelected = cart.some(
                        (item) => item.name === service.name
                    );

                    return (
                        <div
                            key={service.name}
                            onClick={() => {

                                if (isSelected) {
                                    setCart(
                                        cart.filter(
                                            (item) => item.name !== service.name
                                        )
                                    );
                                } else {
                                    setCart([
                                        ...cart,
                                        {
                                            name: service.name,
                                            price: service.price,
                                            quantity: 1,
                                        },
                                    ]);
                                }

                            }}
                            className={`p-6 rounded-2xl shadow-md cursor-pointer transition border-2
                            ${
                                isSelected
                                ? "border-orange-500 bg-orange-50"
                                : "border-transparent bg-white"
                            }`}
                        >

                            <h2 className="text-xl font-semibold">
                                {service.name}
                            </h2>

                            <p className="text-orange-500 font-bold mt-2">
                                RM{service.price}
                            </p>

                        </div>
                    );
                })}

            </div>

          <div className="bg-white rounded-2xl shadow-md p-6 mt-10">

                <h2 className="text-2xl font-bold mb-4">
                    Booking Summary
                </h2>

                {cart.length === 0 ? (
                    <p className="text-gray-500">
                        No services selected yet.
                    </p>
                ) : (
                    <>
                        <div className="space-y-3">

                            {cart.map((item) => {
                                

                                return (
                                    <div
                                        key={item.name}
                                        className="flex justify-between border-b pb-2"
                                    >
                                        <div>
                                            <p>{item.name}</p>

                                            <div className="flex items-center gap-3 mt-2">

                                                <button
                                                    onClick={() => decreaseQuantity(item.name)}
                                                    className="px-2 py-1 bg-gray-200 rounded"
                                                >
                                                    -
                                                </button>

                                                <span className="text-sm">
                                                    Qty: {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() => increaseQuantity(item.name)}
                                                    className="px-2 py-1 bg-orange-500 text-white rounded"
                                                >
                                                    +
                                                </button>

                                            </div>
                                        </div>

                                        <span className="font-semibold text-orange-500">
                                            RM{item.price * item.quantity}
                                        </span>
                                    </div>
                                );
                            })}

                        </div>

                        <div className="mt-8">

                            <h3 className="text-xl font-bold mb-4">
                                Appointment Details
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Select Date
                                    </label>

                                    <input
                                        type="date"
                                        value={bookingDate}
                                        onChange={(e) =>
                                            setBookingDate(e.target.value)
                                        }
                                        className="w-full border rounded-lg p-3"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">
                                        Select Time
                                    </label>

                                    <select
                                        value={bookingTime}
                                        onChange={(e) =>
                                            setBookingTime(e.target.value)
                                        }
                                        className="w-full border rounded-lg p-3"
                                    >
                                        <option value="">
                                            Choose Time Slot
                                        </option>

                                        <option>09:00 AM</option>
                                        <option>10:00 AM</option>
                                        <option>11:00 AM</option>
                                        <option>01:00 PM</option>
                                        <option>02:00 PM</option>
                                        <option>03:00 PM</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-between items-center mt-6 text-xl font-bold">
                            <span>Total</span>

                            <span className="text-orange-500">
                                RM{totalPrice}
                            </span>
                        </div>

                        <button
                            onClick={handleBooking}
                            className="w-full mt-6 bg-orange-500 hover:bg-orange-600
                            text-white py-3 rounded-xl font-semibold transition"
                        >
                            Confirm Booking
                        </button>

                        {successMessage && (
                            <p className="mt-4 text-green-600 font-medium">
                                {successMessage}
                            </p>
                        )}

                    </>
                )}

            </div>

        </div>

      </div>
    </>
  );
}