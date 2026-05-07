"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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

  const validate = () => {
    let newErrors: any = {};

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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem("autohubUser", JSON.stringify(form));

    router.push("/dashboard");
    console.log("Login successful");
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
              Welcome Back to AutoHub
            </h2>
            <p className="text-gray-200">
              Manage your car services, bookings, and maintenance history in one place.
            </p>
          </div>
        </div>

        
        <div className="flex items-center justify-center px-6 bg-gray-50">

          <div className="w-full max-w-md">

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow space-y-5">

              <h2 className="text-3xl font-bold">
                Login
              </h2>

              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              <Button 
                type="submit"
                disabled={!form.email || !form.password}>
                Login
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-[var(--color-primary)] font-medium"
                >
                  Sign up
                </Link>
              </p>

            </form>

          </div>

          

        </div>

      </div>
    </>
  );
}