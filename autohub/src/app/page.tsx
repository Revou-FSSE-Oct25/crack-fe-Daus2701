import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Services />
      <Footer />

    </main>
  );
}