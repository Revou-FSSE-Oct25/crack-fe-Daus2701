export default function LoginPage() {
  return (

    <div className="flex items-center justify-center h-screen">

      <form className="w-[400px] p-8 shadow-lg rounded">

        <h2 className="text-2xl font-bold mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded">
          Login
        </button>

      </form>

    </div>

  );
}