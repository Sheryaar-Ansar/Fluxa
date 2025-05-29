import React from 'react'
import img1 from '../assets/HomeSection3-1.png'
import Button from './Button'

const HomeSection3 = () => {
  return (
    <div className='py-10 bg-[#2C2B3C] w-full mx-auto min-h-screen grid place-items-center mt-10'>
      <div className='px-5 md:px-16 lg:px-26'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
            <div className='grid gap-6'>
                <h1 className='text-white text-5xl font-bold'>We Help Your Business To Become Stronger</h1>
                <h1 className='mt-3 text-white/70'>Our extensive knowledge of the digital marketing sector and our thoroughness in finding the best solution for your business is at the heart of our agency.</h1>
                <Button name={'Start Free Trial'} />
            </div>
            <div>
                <img src={img1} className='sm:w-[350px] aspect-[1] md:w-[542px] md:h-[490px]'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection3
