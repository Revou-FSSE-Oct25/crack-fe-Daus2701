import Navbar from "@/components/layout/Navbar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {
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

            <form className="bg-white p-8 rounded shadow space-y-5">

              <h2 className="text-3xl font-bold">
                Login
              </h2>

              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />

              <Button>Login</Button>

              <p className="text-sm text-gray-500 text-center">
                Don’t have an account?{" "}
                <a href="/signup" className="text-[var(--color-primary)] font-medium">
                  Sign up
                </a>
              </p>

            </form>

          </div>

          

        </div>

      </div>
    </>
  );
}