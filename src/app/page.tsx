import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
    <div className=" h-screen relative">
        <div className="z-20 absolute w-full">
      < Navbar/>
      </div>
      <div className="w-full">
        <video src="/assets/Blender - floating fire particles.mp4"
        autoPlay
        loop
        muted
        className="max-h-screen w-full z-0 absolute object-cover" ></video>
      </div>
    </div>
    </>
  )
}
