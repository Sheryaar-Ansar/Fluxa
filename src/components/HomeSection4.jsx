import React from 'react'
import { BsLightbulb } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import { SiInternetcomputer } from 'react-icons/si'
import logo from '../assets/homeSection4-1.png'
import img from '../assets/homeSection4-2.jpg'

const HomeSection4 = () => {
    return (
        <div className='max-w-6xl  mx-auto mt-15' id='about'>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2  md:gap-x-10'>
                    <div className='relative flex flex-col gap-y-5'>
                        <h2 className='text-[#6F26C2] font-bold uppercase'>Why Choose Us</h2>
                        <h1 className='text-4xl font-bold text-black'>What Make Us Different ?</h1>
                        <p className='text-black/75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste itaque sapiente vero labore, porro minima nostrum sint aliquam consequuntur tempora provident fugit magnam accusamus delectus iure commodi harum atque.</p>
                        <p className='font-[500] font-mono text-black'>"We're a values - drive company that provides affordable, marketing tools for ambitious people and teams."</p>
                        <div className='flex gap-x-4'>
                            <div>
                                <img src={logo} />
                            </div>
                            <div className='grid gap-y-1'>
                                <h1 className='text-black font-bold text-lg'>Chris Brown</h1>
                                <p className='text-black/55'>CEO & Founder</p>
                            </div>
                        </div>
                        <div className='mt-15 border-1 p-6 absolute bottom-[5%] bg-white rounded-[70px] w-[800px]'>
                            <div className='grid grid-cols-3 place-items-center'>
                                <div className='flex gap-x-3'>
                                    <div>
                                        <div className='w-15 h-15 bg-[#c7f5f5] flex items-center justify-center rounded-full'>
                                            <BsLightbulb className='text-2xl text-white' />
                                        </div>
                                    </div>
                                    <h1 className='text-lg font-bold'>Professional And Certified Company</h1>
                                </div>
                                <div className='flex gap-x-3'>
                                    <div>
                                        <div className='w-15 h-15 bg-[#FBCEB1] flex items-center justify-center rounded-full'>
                                            <GoGraph className='text-2xl text-white' />
                                        </div>
                                    </div>
                                    <h1 className='text-lg font-bold'>Highest Success Rating</h1>
                                </div>
                                <div className='flex gap-x-3'>
                                    <div>
                                        <div className='w-15 h-15 bg-[#FFB6C1] flex items-center justify-center rounded-full'>
                                            <SiInternetcomputer className='text-2xl text-white' />
                                        </div>
                                    </div>
                                    <h1 className='text-lg font-bold'>Quality Marketing Solutions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img src={img} className='rounded-2xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection4
