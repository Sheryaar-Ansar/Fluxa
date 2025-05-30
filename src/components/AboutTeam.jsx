import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img1 from '../assets/team-1.jpg'
import img2 from '../assets/team-2.jpg'
import img3 from '../assets/team-3.jpg'
import img4 from '../assets/team-4.jpg'

const AboutTeam = () => {
    const data = [
        {
            id: 1,
            img: img1,
            name: 'Linda Jackson',
            designation: 'Co - Founder',
        },
        {
            id: 2,
            img: img2,
            name: 'Tom Hank',
            designation: 'Financial Expert',
        },
        {
            id: 3,
            img: img3,
            name: 'Jenifer Kim',
            designation: 'Consultant',
        },
        {
            id: 4,
            img: img4,
            name: 'Christina Jim',
            designation: 'SEO Expert',
        },
    ]
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        cssEase: 'linear'
    };
    return (
        <div className='max-w-7xl mx-auto min-h-screen mt-35'>
            <div className='flex flex-col gap-y-4'>
                <h2 className='text-center text-[#6F26C2] font-bold uppercase'>Connect To Us</h2>
                <h1 className='text-black font-bold text-center text-5xl'>Meet Our Expert Team</h1>
                <div className=''>
                    <Slider {...settings}>
                        {data?.map((data) => {
                            return (
                                <div className='' key={data.id}>
                                    <div className='group hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-400 hover:rounded-2xl pb-2 rounded-2xl w-[300px] flex flex-col gap-y-2 overflow-hidden'>
                                        <div className='w-[300px] h-[300px] rounded-2xl overflow-hidden'>
                                            <img src={data.img} className='rounded-2xl group-hover:transform group-hover:scale-110 transition-transform duration-200 ease-linear' />
                                        </div>
                                        <h1 className='text-black text-center font-bold text-2xl'>{data.name}</h1>
                                        <p className='text-black/55 text-center'>{data.designation}</p>
                                        <div className='flex gap-x-2 justify-center items-center cursor-pointer'>
                                            <div className='w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center hover:shadow-md hover:shadow-gray-300'>
                                                <FaFacebook className='text-2xl text-gray-300' />
                                            </div>
                                            <div className='w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center hover:shadow-md hover:shadow-gray-300'>
                                                <FaLinkedin className='text-2xl text-gray-300' />
                                            </div>
                                            <div className='w-12 h-12 rounded-full bg-gray-100 flex justify-center items-center hover:shadow-md hover:shadow-gray-300'>
                                                <FaTwitter className='text-2xl text-gray-300' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam
