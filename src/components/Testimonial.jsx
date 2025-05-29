import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa';
import img1 from '../assets/testimonial-1.png'
import img2 from '../assets/testimonial-2.png'


const Testimonial = () => {
    const data = [
        {
            id: 1,
            img: img1,
            name: 'Christina Jim',
            field: 'UI Designer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit quaerat magnam beatae voluptatem harum molestiae? Illum saepe nemo ex voluptatem, ullam, architecto similique omnis explicabo harum earum, repellendus asperiores!',
        },
        {
            id: 2,
            img: img2,
            name: 'John Snow',
            field: 'SEO Expert',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum ullam nulla maxime neque voluptatibus dicta dolore, fugit magnam porro natus voluptates blanditiis eligendi corrupti reiciendis amet. Nulla, dolores iusto.',
        },
    ]

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="absolute top-1/2 right-[-40px] z-10 transform -translate-y-1/2 cursor-pointer w-12 h-12 rounded-full border-[#6F26C2] border-1 flex items-center justify-center hover:shadow-md hover:shadow-[#6F26C2] hover:bg-[#6F26C2] transition-all ease-in-out duration-150 text-[#6F26C2] hover:text-white"
            >
                <FaLongArrowAltRight size={24} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="absolute top-1/2 left-[-40px] z-10 transform -translate-y-1/2 cursor-pointer w-12 h-12 rounded-full border-[#6F26C2] border-1 flex items-center justify-center hover:shadow-md hover:shadow-[#6F26C2] hover:bg-[#6F26C2] transition-all ease-in-out duration-150 text-[#6F26C2] hover:text-white"
            >
                <FaLongArrowAltLeft size={24} />
            </div>
        );
    };


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className='max-w-7xl mx-auto min-h-screen'>
            <div>
                <h2 className='text-[#6F26C2] uppercase text-center font-bold'>Testimonial</h2>
                <h1 className='text-center text-4xl font-bold text-black'>What Our Customers Say</h1>
                <div className='grid grid-cols-1 mt-10 w-full'>
                    <Slider {...settings}>
                        {data?.map((data, idx) => {
                            return (
                                <div className='px-3' key={idx}>
                                    <div className='p-7 bg-gray-100 shadow-md rounded-xl flex flex-col gap-y-5'>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center justify-center gap-x-3'>
                                                <div>
                                                    <img src={data.img} />
                                                </div>
                                                <div>
                                                    <h1 className='font-bold text-xl'>{data.name}</h1>
                                                    <h2 className='text-black/55'>{data.field}</h2>
                                                </div>
                                            </div>
                                            <div className='flex gap-1'>
                                                <FaStar className='text-yellow-500' />
                                                <FaStar className='text-yellow-500' />
                                                <FaStar className='text-yellow-500' />
                                                <FaStar className='text-yellow-500' />
                                                <FaStar className='text-yellow-500' />
                                            </div>
                                        </div>
                                        <div className='mt-5'>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolorem adipisci illo tempora necessitatibus, corporis assumenda unde molestias perspiciatis recusandae incidunt in sequi vitae culpa laudantium similique reiciendis esse. Saepe.</p>
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

export default Testimonial
