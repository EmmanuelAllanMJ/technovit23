import Navbar from "../components/Navbar";
import Schools from "@/components/schools";
import Footer from "@/components/Footer";
import TickerComponent from "@/components/ticker";
export default function Home() {
  return (
    <div>
      <div className="relative">
        <TickerComponent />
      </div>
      <div className=" h-screen relative">
        <div className="z-20 absolute w-full">
          <Navbar />
        </div>

        <div className="w-full">
          {/* <h1 className="text-white">Hiiii</h1> */}
          <video
            src="/assets/purpleparticle2.mp4"
            autoPlay
            loop
            muted
            className="h-screen w-screen z-0 fixed object-cover"
          ></video>
          <div className="relative translate-y-20 text-center">
            <svg height={"100%"} width={"100%"} className="fill-white">
              <text x={"50%"} y={"100%"} textAnchor="middle">
                technoVIT&apos;23
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <Schools />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}
