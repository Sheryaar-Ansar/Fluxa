import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <div className='max-w-6xl mx-auto min-h-screen' id='contact'>
            <div className='grid grid-cols-2 place-items-center md:gap-x-20'>
                <div className='rounded-xl'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7098362652!2d66.49594966940124!3d25.192983639780632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1748866915158!5m2!1sen!2s" width="600" height="450" style={{borderRadius: '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='uppercase text-[#6F26C2] font-bold'>Have A Question ?</h2>
                    <h1 className='text-5xl text-black font-bold'>Leave Us A Message</h1>
                    <p className='text-black/75 mt-3'>Because helping to improve your business is vital to us, so let's keep in touch, send us message and we'll get back to you as soon as possible.</p>
                    <div>
                        <form className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-3'>
                                <input type="text" className='rounded-lg border border-gray-200 p-3 w-full' placeholder='Name *' required/>
                                <input type="email" className='rounded-lg border border-gray-200 p-3 w-full' placeholder='Email *' required/>
                                <textarea name="" id="" className='rounded-lg p-3 w-full border border-gray-200' placeholder='Comment' rows={5} required></textarea>
                            </div>
                            <button className='uppercase text-left bg-[#6F26C2] w-3/8 flex justify-center items-center px-3 py-2 text-white font-bold rounded-xl hover:shadow-md hover:shadow-[#6F26C2] hover:border hover:border-[#6F26C2] border border-[#6F26C2] cursor-pointer transition-all ease-in-out' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
