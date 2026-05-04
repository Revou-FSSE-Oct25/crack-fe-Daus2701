import Navbar from "@/components/layout/Navbar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center min-h-[80vh]">

        <form className="w-[400px] p-8 shadow-lg rounded bg-white space-y-4">

          <h2 className="text-2xl font-bold text-center">
            Login
          </h2>

          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button>Login</Button>

        </form>

      </div>
    </>
  );
}