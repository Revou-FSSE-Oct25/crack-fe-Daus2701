export default function Hero() {
  return (
    <section
      className="h-[90vh] flex items-center bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage: "url('/images/bg-hero.jpg')",
      }}
    >

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

      
      <div className="relative px-16 max-w-2xl">

        <h1 className="text-5xl font-bold text-white leading-tight drop-shadow-lg">
          Book A Service Today!
        </h1>

        <p className="text-3xl mt-4 text-white">
          Save Up to{" "}
          <span className="text-[var(--color-primary)]">
            50%
          </span>
        </p>

        <p className="mt-6 text-gray-300 drop-shadow">
          Professional car service and repair with trusted mechanics.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded shadow-lg">
            Get a Free Quote
          </button>

          <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
            See All Services
          </button>
        </div>

      </div>

    </section>
  );
}