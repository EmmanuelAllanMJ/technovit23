"use client"
import { FC, useRef } from 'react'
// import CarouselStudents from './CarouselStudents'
import Carousel from "framer-motion-carousel"
import { facultyImageUrl, studentImageUrl } from '../../public/data/data';
import Image from 'next/image';


const Coordinator = () => {
    const carouselRef = useRef();

    return (
        <div className='font-monty overflow-hidden'>
            <img
                src="/assets/coordinates.png"
                className="mx-auto blur-1xl"
                alt="Background"
            />
            <h2 className=' mt-100 mb-10 text-3xl md:text-5xl lg:text-6xl text-white uppercase text-center'>Co-ordinators</h2>
            {/*             
            <div className='mt-1'>
                <Carousel />
                <br />
                <CarouselStudents />
            </div>
            <br /> */}
            <>
                <div className="flex w-full">
                    <h1 className="text-white mx-auto text-4xl my-16">Faculty</h1>
                </div>

                <div style={{ width: 800, height: 500, margin: "0 auto" }} >
                    <Carousel autoPlay={true} interval={20000} loop={true} >
                        {facultyImageUrl.map((item, i) => (
                            <div className='flex items-center justify-center flex-col'>
                                <Image
                                    draggable="false"
                                    src={item.link}
                                    key={i}
                                    width={400}
                                    height={400}
                                    alt={item.name}
                                />
                                <h1 className="text-white text-center text-3xl">{item.name}</h1>

                            </div >
                        ))}
                    </Carousel>
                </div>

                <div className="flex w-full">
                    <h1 className="text-white mx-auto text-4xl my-16">Student</h1>
                </div>

                <div style={{ width: 800, height: 500, margin: "0 auto" }} >
                    <Carousel autoPlay={true} interval={20000} loop={true}>
                        {studentImageUrl.map((item, i) => (
                            <div className='flex items-center justify-center flex-col'>
                                <Image
                                    draggable="false"
                                    src={item.link}
                                    key={i}
                                    width={400}
                                    height={400}
                                    alt={item.name}
                                />
                                <h1 className="text-white text-center text-3xl">{item.name}</h1>

                            </div >
                        ))}
                    </Carousel>
                </div>

            </>
        </div>
    )
}

export default Coordinator;

