import React from 'react'
import { FaInstagram, FaSlack, FaTwitter } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io'

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-gray-400'>
                <marquee>
                    <ul className='flex gap-100 py-6 list-disc marker:text-[#6F26C2] marker:text-2xl text-xl uppercase'>
                        <li>Documentation</li>
                        <li>Transform ideas into reality</li>
                        <li>Join the community</li>
                        <li>How it works</li>
                        <li>Documentation</li>
                        <li>Transform ideas into reality</li>
                        <li>Join the community</li>
                        <li>How it works</li>
                    </ul>
                </marquee>
                <div className='bg-[#0F110F] grid grid-cols-4 place-items-center px-4 py-20'>
                    <div className='grid gap-8'>
                        <div className='flex gap-3 items-center cursor-pointer' onClick={() => navigate('/')}>
                            <span className='bg-[#6F26C2] w-8 h-8 rounded-full logo2'></span>
                            <h1 className='text-4xl font-bold text-white'>MarX.</h1>
                        </div>
                        <p className='text-gray-400'>We combine technical skills to imprtove clients' online presence. These agencies typically provide a diverse set of services</p>
                        <div className='flex cursor-pointer gap-4'>
                            <FaInstagram className='text-white text-3xl'/>
                            <FaTwitter className='text-white text-3xl'/>
                            <FaSlack className='text-white text-3xl'/>
                        </div>
                    </div>
                    <div className='grid gap-8'>
                        <div>
                            <p className='text-white text-lg font-semibold'>Company</p>
                        </div>
                        <div className='grid gap-2'>
                            <p className='text-gray-400'>Profile</p>
                            <p className='text-gray-400'>About</p>
                            <p className='text-gray-400'>Plans & Pricing</p>
                            <p className='text-gray-400'>Help Center</p>
                        </div>
                    </div>
                    <div className='grid gap-8'>
                        <div>
                            <p className='text-white text-lg font-semibold'>Information</p>
                        </div>
                        <div className='grid gap-6'>
                            <p className='text-gray-400'>Phone: +92 3456 7890</p>
                            <p className='text-gray-400'>Email:marxgroup@gmail.com</p>
                            <p className='text-gray-400'>Address:5919 Trussville St, Birmingham</p>
                        </div>
                    </div>
                    <div className='grid gap-8'>
                        <div>
                            <p className='text-white text-lg font-semibold'>Subscribe Us</p>
                        </div>
                        <div className=''>
                            <p className='text-gray-400'>Join our subscribers list to get the instant latest news and special offers.</p>
                            <div className='mt-4 bg-white border rounded-3xl flex items-center px-3 py-2 focus:outline-1 focus:outline-[#6F26C2]'>
                                <input type="email" className='w-full px-3 py-2 rounded-3xl focus:outline-none'placeholder='Enter your email address'/>
                                <span className='cursor-pointer w-14 h-12 bg-[#6F26C2] rounded-full flex items-center justify-center'><IoIosSend className='text-white text-2xl'/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
