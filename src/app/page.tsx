
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Space from "@/components/Space";
import Countdown from "@/components/Countdown";
export default function Home() {
  return (
    <div className="bg-[#110F13]">
      <Hero />
      <Space />
      <Countdown/>
      <Footer />
    </div>
  );
}
