import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      
      <section
        className="h-[40vh] flex items-center justify-center text-white relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl font-bold">
          About AutoHub
        </h1>
      </section>

      
      <section className="px-6 md:px-16 py-16 max-w-4xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Our Story
        </h2>

        <p className="mb-4 text-[var(--color-muted)]">
          AutoHub was established to provide reliable and professional
          car services with a strong focus on customer satisfaction.
        </p>

        <p className="mb-4 text-[var(--color-muted)]">
          Our team of experienced mechanics ensures every vehicle is
          handled with precision and care, using modern tools and techniques.
        </p>

        <p className="mb-6 text-[var(--color-muted)]">
          We are committed to building long-term relationships with our
          customers by delivering transparency, quality, and trust.
        </p>

        {/* Highlight Box */}
        <div className="bg-[var(--color-light)] p-6 rounded-lg">
          <p className="font-medium">
            🚗 Our mission is simple: Keep your car running smoothly and safely.
          </p>
        </div>

      </section>
    </>
  );
}