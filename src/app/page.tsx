import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Schools from "@/components/schools";
import About from "@/components/About";
import dynamic from "next/dynamic";
import Star from "@/components/Stars"
import Events from "@/components/Events";
import Carousel from "@/components/Carousel";
import Coordinator from "@/components/Coordinator";

const Countdown = dynamic(() => import("../components/Countdown"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#030014]">
      <Star/>
      <Hero />
      <Gallery />
      <section className="min-h-screen pt-16">
        <Countdown />
        <Schools />
      </section>
      <section className="about-grid">
        <Events />
      </section>
      <Coordinator/>
        <About />
      <Footer />
    </main>
  );
}
