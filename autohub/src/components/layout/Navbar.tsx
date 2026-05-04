import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      
      <h1 className="text-2xl font-bold text-orange-500">
        AutoHub
      </h1>

      <ul className="flex gap-8 text-gray-700">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Service</Link></li>
        <li><Link href="#">Blog</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-4 py-2 border rounded-md"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
        >
          Sign Up
        </Link>
      </div>

    </nav>
  );
}