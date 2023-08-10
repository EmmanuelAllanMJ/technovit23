import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Schools from "@/components/schools";
import About from "@/components/About";
import dynamic from "next/dynamic";
import Star from "@/components/Stars"
import Events from "@/components/Events";

const Countdown = dynamic(() => import("../components/Countdown"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-[#110F13]">
      <Star/>
      <Hero />
      <Gallery />
      <section className="min-h-screen pt-16">
        <Countdown />
        <Schools />
      </section>
      <section>
        <Events />
      </section>
      <section className="h-screen flex flex-col justify-center items-center">
        <About />
      </section>
      <Footer />
    </main>
  );
}
