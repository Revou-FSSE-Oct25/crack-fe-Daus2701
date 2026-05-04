const services = [
  { icon: "🛢️", title: "Oil Change" },
  { icon: "🛞", title: "Tyre Change" },
  { icon: "🔧", title: "General Service" },
  { icon: "🔋", title: "Car Battery" },
  { icon: "🛑", title: "Brake Repair" },
  { icon: "⚙️", title: "Suspension" },
];

export default function Services() {
  return (
    <section className="py-20 bg-[var(--color-light)] text-center">

      <h2 className="text-3xl font-bold mb-4">
        Vehicle Repair Services
      </h2>

      <p className="text-[var(--color-muted)] mb-12">
        Choose from a wide range of professional car services
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-16">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="text-4xl mb-4">
              {service.icon}
            </div>

            <h3 className="font-semibold text-lg">
              {service.title}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}