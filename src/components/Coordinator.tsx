"use client"
import { FC } from 'react'
import Carousel from './Carousel'

const Coordinator = () => {
    return (
        <div className='font-monty overflow-hidden'>
            <img
                src="/assets/coordinates.png"
                className="mx-auto blur-1xl"
                alt="Background"
            />
            <h2 className=' -mt-48 md:-mt-96 text-3xl md:text-5xl lg:text-6xl text-white uppercase text-center'>Co-ordinators</h2>
            
            <div className='mt-16'>Avatar
                <Carousel />
            </div>
        </div>
    )
}

export default Coordinator;

