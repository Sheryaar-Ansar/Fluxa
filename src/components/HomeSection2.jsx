import React from 'react'
import Button from './Button'
import img1 from '../assets/homeSection2-1.jpg'
import img2 from '../assets/homeSection2-2.jpg'
import img3 from '../assets/homeSection2-3.jpg'
import img4 from '../assets/homeSection2-4.jpg'
import img5 from '../assets/homeSection2-5.jpg'
import img6 from '../assets/homeSection2-6.jpg'
import { IoIosArrowRoundForward } from 'react-icons/io'

const HomeSection2 = () => {
    const services = [
        {
            id: 1,
            img: img1,
            category: 'Affilate',
            name: 'SEO Website',
        },
        {
            id: 2,
            img: img2,
            category: 'Branding',
            name: 'Income Growth',
        },
        {
            id: 3,
            img: img3,
            category: 'Branding',
            name: 'Social Media Marketing',
        },
        {
            id: 4,
            img: img4,
            category: 'Branding',
            name: 'Technical Agency',
        },
        {
            id: 5,
            img: img5,
            category: 'Marketing',
            name: 'Social Engagement',
        },
        {
            id: 6,
            img: img6,
            category: 'Marketing',
            name: 'Content Writing',
        },
    ]
    return (
        <div className='max-w-6xl mx-auto min-h-screen' id='case-studies'>
            <div className='flex flex-col gap-5'>
                <p className='uppercase text-[#6F26C2] font-bold'>Case Studies</p>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='w-1/2 text-5xl font-bold'>Our Success Projects That Inspire</h1>
                    <Button name={'See All Projects'} />
                </div>
                <div className='grid place-items-center'>
                    <div className='grid grid-cols-3 gap-x-25 gap-y-4 place-items-center'>
                        {services.length > 0 ? services.map((service, idx) => {
                            return (
                                <div key={idx} className='p-3 rounded-2xl hover:bg-gray-50 grid gap-3 md:w-[420px]'>
                                    <div className='w-[350px] md:w-[400px]'>
                                        <img src={service.img} className='rounded-xl' />
                                    </div>
                                    <p className='text-[#6F26C2] font-bold uppercase'>{service.category}</p>
                                    <div className='flex justify-between items-center'>
                                        <h1 className='text-3xl font-bold'>{service.name}</h1>
                                        <button className='w-12 h-12 border-1 rounded-full flex justify-center items-center cursor-pointer hover:border-[#6F26C2] hover:shadow-md hover:shadow-[#6F26C2] hover:text-white hover:bg-[#6F26C2] transition-all ease-in-out'><IoIosArrowRoundForward className='text-2xl'/></button>
                                    </div>
                                </div>
                            )
                        }) : <div>No Items Found</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection2
