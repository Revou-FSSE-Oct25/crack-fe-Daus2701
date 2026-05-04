import Navbar from "@/components/layout/Navbar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-[80vh]">

        <form className="w-[400px] p-8 shadow-lg rounded bg-white space-y-4">

          <h2 className="text-2xl font-bold text-center">
            Create Account
          </h2>

          {/* User Info */}
          <Input placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          {/* 🚗 Car Info */}
          <Input placeholder="Car Make (e.g. Toyota)" />
          <Input placeholder="Car Model (e.g. Vios)" />
          <Input placeholder="Plate Number (e.g. ABC1234)" />

          <Button>Sign Up</Button>

        </form>

      </div>
    </>
  );
}