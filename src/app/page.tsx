import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Space from "@/components/Space";
import Gallery from "@/components/Gallery";
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";


import About from "@/components/About";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import('../components/Countdown'), {
  ssr: false
})

export default function Home() {
  return (
    <div className="bg-[#110F13]">
      <Navbar/>
      <Hero />
      <Gallery />

      <Countdown/>
      <About />

      <Footer />
    </div>
  );
}
