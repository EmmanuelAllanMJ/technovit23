import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Space from "@/components/Space";
import Gallery from "@/components/Gallery";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className="bg-[#110F13]">
      <Hero />
      <Gallery/>
      <Footer />
    </div>
  );
}
