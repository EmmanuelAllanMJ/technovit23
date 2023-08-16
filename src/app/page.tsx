import About from "@/components/About";
import CoordinatorComponent from "@/components/Coordinator";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Star from "@/components/Stars";
import Schools from "@/components/Schools";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("../components/Countdown"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#030014]">
      <Star />
      <Hero />
      <section className="about-grid">
          <Countdown />
        <section className="min-h-screen flex flex-col justify-center items-center">
          <About />
        </section>
      </section>
      <Gallery />
      <section className="about-grid">
        <Schools />
        <Events />
        <CoordinatorComponent/>    
        <Footer />
      </section>
    </main>
  );
}
