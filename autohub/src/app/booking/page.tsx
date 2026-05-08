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
            price: 780,
        },
        {
            name: "Battery Replacement",
            price: 250,
        },
    ];

    const [selectedServices, setSelectedServices] = useState<string[]>([]);

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

                    const isSelected =
                        selectedServices.includes(service.name);

                    return (
                        <div
                            key={service.name}
                            onClick={() => {

                                if (isSelected) {
                                    setSelectedServices(
                                        selectedServices.filter(
                                            (s) => s !== service.name
                                        )
                                    );
                                } else {
                                    setSelectedServices([
                                        ...selectedServices,
                                        service.name,
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

          

        </div>

      </div>
    </>
  );
}