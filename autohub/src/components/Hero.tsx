export default function Hero() {
  return (
    <section className="flex items-center justify-between px-16 py-20">

      <div className="max-w-lg">

        <h1 className="text-5xl font-bold">
          Book A Service Today!
        </h1>

        <p className="text-3xl mt-4">
          Save Up to <span className="text-orange-500">50%</span>
        </p>

        <p className="mt-6 text-gray-600">
          Professional car service and repair with trusted mechanics.
        </p>

        <div className="flex gap-4 mt-6">

          <button className="bg-orange-500 text-white px-6 py-3 rounded">
            Get a Free Quote
          </button>

          <button className="border px-6 py-3 rounded">
            See All Services
          </button>

        </div>

      </div>

      <img
        src="https://png.pngitem.com/pimgs/s/21-218755_group-of-cars-png-transparent-png.png"
        className="w-[500px]"
      />

    </section>
  );
}