import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

import About from "@/components/About";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("../components/Countdown"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-[#110F13]">
      <Hero />
      <Gallery />
      <Countdown />
      <About />
      <Footer />
    </div>
  );
}
