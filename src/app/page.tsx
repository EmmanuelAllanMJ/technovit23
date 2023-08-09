import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}