import Button from "../ui/Button";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 px-16 flex flex-col md:flex-row items-center gap-12">

      
      <div className="flex-1">

        <h2 className="text-3xl font-bold mb-4">
          About AutoHub
        </h2>

        <p className="text-[var(--color-muted)] mb-6">
          AutoHub provides professional car services with trusted mechanics,
          ensuring your vehicle stays in top condition.
        </p>

        <ul className="space-y-3 mb-6">
          <li>✔ High-quality service</li>
          <li>✔ Experienced mechanics</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Fast and reliable</li>
        </ul>

        <Link href="/about">
            <Button>Read More</Button>
        </Link>

      </div>

      
      <div className="flex-1">
        <img
          src="/images/about.jpg"
          className="rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
}