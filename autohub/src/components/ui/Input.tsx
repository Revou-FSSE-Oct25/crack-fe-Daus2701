import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full border p-3 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    />
  );
}