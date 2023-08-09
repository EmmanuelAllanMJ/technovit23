import React from 'react'

const About = () => {
  return (
    <div>
        <div className="md:grid md:grid-cols-3  md:gap-8 lg:px-36 md:px-30 px-12 ">
         <div className="">
	         <h2 className="text-gradient-about md:text-end text-center md:text-6xl sm:text-5xl text-4xl ">ABOUT</h2>
	    </div>
	    {/* <p className="leading- text-white font-extralight text-justify md:text-lg text-[15px] col-span-2 py-3"> */}
        <div className='col-span-2'>
        <p className=" text-white font-extralight text-justify text-xl  md:text-lg text-base !leading-tight">
            Join us for technoVIT'23, an international technical festival at VIT Chennai. Packed with workshops, events, gaming, and exhibitions, we promise an exhilarating atmosphere of learning and fun.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About
