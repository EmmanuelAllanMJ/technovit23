import React from 'react'

const About = () => {
  return (
    <div>
        <div className="md:grid md:grid-cols-3  md:gap-8 lg:px-36 md:px-30 sm:14  px-12">
            {/* left */}
            <div className="">
                <h2 className="text-gradient-about md:text-end text-center  md:text-[60px] sm:text-[50px] text-[40px] ">ABOUT</h2>
            </div>
            {/* right */}
            <div className="text-white font-extralight text-justify md:text-[18px] text-[15px] col-span-2 py-3">
            This is the 7th Edition of technoVIT, an international level technical festival of VIT Chennai.It gives us immense pride and pleasure in presenting technoVIT' 23. This technical extravaganza will be filled with numerous activities such as workshops and technical events organised by the various schools of the University with the primary objective being, " nurture professional skills and impart fine qualities to the students". It also has gaming events to thrill and create an environment with fun and frolic. Additionally, technical exhibitions from various organisations are being hosted. We, at VIT Chennai promise the audience an atmosphere of immense joy leaving them the thirst for more
            </div>
        </div>
    </div>
  )
}

export default About