import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Space from "@/components/Space";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bg-[#110F13]">
      <Hero />
      <Space />
      <About />
      <Footer />
    </div>
  );
}
