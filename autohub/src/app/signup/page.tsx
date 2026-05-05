"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function SignupPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    carMake: "",
    carModel: "",
    plateNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    carMake: "",
    carModel: "",
    plateNumber: "",
  });

  const validate = () => {
    let newErrors: any = {};

    // REQUIRED
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.carMake) newErrors.carMake = "Car make is required";
    if (!form.carModel) newErrors.carModel = "Car model is required";

    if (!form.plateNumber) {
      newErrors.plateNumber = "Plate number is required";
    } else if (!/^[A-Z0-9]+$/i.test(form.plateNumber)) {
      newErrors.plateNumber = "Invalid plate format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({
    ...errors,
    [e.target.name]: "",
  });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form Data:", form);
  };

  return (
    <>
      <Navbar />

      <div className="grid md:grid-cols-2 min-h-[90vh]">

        
        <div
          className="hidden md:flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/images/auth-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative text-white px-10 max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              Join AutoHub Today
            </h2>
            <p className="text-gray-200">
              Register your car and manage your services easily.
            </p>
          </div>
        </div>

        
        <div className="flex items-center justify-center px-6 bg-gray-50">

          <div className="w-full max-w-md">

            <form onSubmit={handleSubmit}
                  className="bg-white p-8 rounded shadow space-y-4">

              <h2 className="text-3xl font-bold">
                Sign Up
              </h2>

              <Input name="name" placeholder="Full Name" onChange={handleChange} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <Input name="email" placeholder="Email" onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <Input name="password" type="password" placeholder="Password" onChange={handleChange} />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <Input name="carMake" placeholder="Car Make" onChange={handleChange} />
              {errors.carMake && <p className="text-red-500 text-sm">{errors.carMake}</p>}

              <Input name="carModel" placeholder="Car Model" onChange={handleChange} />
              {errors.carModel && <p className="text-red-500 text-sm">{errors.carModel}</p>}

              <Input name="plateNumber" placeholder="Plate Number" onChange={handleChange} />
              {errors.plateNumber && <p className="text-red-500 text-sm">{errors.plateNumber}</p>}

              <Button
                  type="submit"
                  disabled={
                    !form.name ||
                    !form.email ||
                    !form.password ||
                    !form.carMake ||
                    !form.carModel ||
                    !form.plateNumber
                  }
              >
                  Register
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Already have an account?{" "}
                <a href="/login" className="text-[var(--color-primary)] font-medium">
                  Login
                </a>
              </p>

            </form>

          </div>

        </div>

      </div>
    </>
  );
}