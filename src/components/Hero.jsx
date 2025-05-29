import React from 'react'
import HeroImg from '../assets/heroimg.png'
import Button from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex mx-auto max-w-6xl'>
      <div className='grid grid-cols-2 place-items-center '>
        <div className='grid gap-5'>
            <h1 className='text-6xl font-bold'>Digital Marketing Agency For Your Business</h1>
            <p className='text-md text-gray-500 text-wrap'>Enjoy most of the time exploring our newly made website. Feel free to contact us.</p>
            <Button name={'Discover More'}/>
        </div>
        <div className='bg-gray-300 rounded-full'>
            <div>
                <img src={HeroImg} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
