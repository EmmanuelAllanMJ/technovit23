"use client"
import { FC } from 'react'
import Carousel from './Carousel'
import CarouselStudents from './CarouselStudents'

const Coordinator = () => {
    return (
        <div className='font-monty overflow-hidden'>
            <img
                src="/assets/coordinates.png"
                className="mx-auto blur-1xl"
                alt="Background"
            />
            <h2 className=' mt-100 mb-10 text-3xl md:text-5xl lg:text-6xl text-white uppercase text-center'>Co-ordinators</h2>
            
            <div className='mt-1'>
                <Carousel />
                <br />
                <CarouselStudents />
            </div>
            <br />
        </div>
    )
}

export default Coordinator;

