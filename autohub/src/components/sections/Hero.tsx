export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://straitslighting.com/wp-content/uploads/2021/05/auto-shop-bay-lighting.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay (VERY IMPORTANT) */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <div className="relative px-16 max-w-2xl">

        <h1 className="text-5xl font-bold leading-tight">
          Book A Service Today!
        </h1>

        <p className="text-3xl mt-4">
          Save Up to{" "}
          <span className="text-[var(--color-primary)]">
            50%
          </span>
        </p>

        <p className="mt-6 text-[var(--color-muted)]">
          Professional car service and repair with trusted mechanics.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded">
            Get a Free Quote
          </button>

          <button className="border px-6 py-3 rounded">
            See All Services
          </button>
        </div>

      </div>

    </section>
  );
}