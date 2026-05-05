import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />

    </main>
  );
}