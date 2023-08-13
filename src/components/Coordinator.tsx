import { FC } from 'react'
import Carousel from './Carousel'

const Coordinator = ({ }) => {
    return <div className='overflow-hidden'>
        <img
            src="/assets/coordinates.png"
            className="object-cover blur-1xl"
            alt="Background"
        />
        <h2 className='-mt-96 text-5xl text-white uppercase text-center '>Co-ordinators</h2>

        <div className='mt-16'>
            <Carousel />
        </div>
    </div>
}

export default Coordinator