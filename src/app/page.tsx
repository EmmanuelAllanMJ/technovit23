import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
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
      <div className="relative">
        <About/>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}
