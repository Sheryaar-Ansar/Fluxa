import React from 'react'
import img1 from '../assets/homeSection1-1.jpg'
import img2 from '../assets/homeSection1-2.jpg'
import Button from './Button'
import { LiaBullhornSolid } from 'react-icons/lia'
import { TbHomeX, TbUserSearch } from 'react-icons/tb'
const HomeSection = () => {
    return (
        <div className='min-h-screen max-w-6xl mx-auto'>
            <div className='py-25 flex flex-col gap-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-2'>
                    <div className='grid gap-4'>
                        <p className='uppercase font-semibold text-[#6F26C2]'>Our Service</p>
                        <h1 className='text-5xl font-bold'>We Provide Marketing Solutions That Work</h1>
                        <p className='text-gray-500 mt-8 text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                        <Button name={'See All Service'}/>
                    </div>
                    <div className='grid md:grid-cols-2 gap-2'>
                        <img src={img1} className='rounded-t-[130px] rounded-r-[0px] rounded-b-[130px] rounded-l-[130px]'/>
                        <img src={img2} className='rounded-tl-[0px] rounded-tr-[120px] rounded-br-[120px] rounded-bl-[0px]'/>
                    </div>
                </div>
                <div>
                <hr className='max-w-7xl mx-auto text-gray-300 '/>
                </div>
                <div>
                    <div className='grid grid-cols-3 place-items-center'>
                        <div className='flex flex-col gap-5 '>
                            <div className='bg-[#FA7C1733] w-16 h-16 rounded-full flex justify-center items-center ml-16'>
                                <LiaBullhornSolid className='text-[#FA7C17] text-2xl rotate-[350deg]'/>
                            </div>
                            <div className='flex'>
                                <h1 className='font-[DM] text-[24px] text-[#A6A6A6] font-[700] stroke-1 stroke-[#A6A6A6]'>01</h1>
                                <div className='ml-12 flex flex-col gap-3'>
                                    <h1 className='text-3xl font-bold'>Digital Marketing</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit suscipit aperiam, illum possimus adipisci reiciendis ut quod molestiae? Voluptatem expedita repudiandae tempore. Dolorem eligendi provident vero. Eius, est earum?</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div className='bg-[#5197FF33] w-16 h-16 rounded-full flex justify-center items-center ml-16'>
                                <TbUserSearch className='text-[#3B88FB] text-2xl rotate-[10deg]'/>
                            </div>
                            <div className='flex'>
                                <h1 className='font-[DM] text-[24px] text-[#A6A6A6] font-[700] stroke-1 stroke-[#A6A6A6]'>02</h1>
                                <div className='ml-12 flex flex-col gap-3'>
                                    <h1 className='text-3xl font-bold'>SEO Optimization</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit suscipit aperiam, illum possimus adipisci reiciendis ut quod molestiae? Voluptatem expedita repudiandae tempore. Dolorem eligendi provident vero. Eius, est earum?</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5 '>
                            <div className='bg-[#FB948D33] w-16 h-16 rounded-full flex justify-center items-center ml-16'>
                                <TbHomeX className='text-[#FD837B] text-2xl rotate-[0deg]'/>
                            </div>
                            <div className='flex'>
                                <h1 className='font-[DM] text-[24px] text-[#A6A6A6] font-[700] stroke-1 stroke-[#A6A6A6]'>03</h1>
                                <div className='ml-12 flex flex-col gap-3'>
                                    <h1 className='text-3xl font-bold'>Product Research</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque reprehenderit suscipit aperiam, illum possimus adipisci reiciendis ut quod molestiae? Voluptatem expedita repudiandae tempore. Dolorem eligendi provident vero. Eius, est earum?</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection
