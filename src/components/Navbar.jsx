import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    // const navigate = useNavigate()

    useEffect(() => {
        const links = document.querySelectorAll('.custom-menu a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                links.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');
            });
        });

        return () => {
            // Clean up listeners on unmount
            links.forEach(link => {
                link.removeEventListener('click', () => { });
            });
        };
    }, []);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='py-10'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center cursor-pointer' > {/*onClick={()=>navigate('/')} */}
                        <span className='bg-[#6F26C2] w-12 h-12 rounded-full logo'></span>
                        <h1 className='text-5xl font-bold text-gray-500'>MarX.</h1>
                    </div>
                    <div className='flex gap-10 uppercase font-semibold custom-menu'>
                        {/* <NavLink to={'/'} className='navlink'>Home</NavLink>
                        <NavLink to={'/service'} className='navlink'>Servies</NavLink>
                        <NavLink to={'/contact'} className='navlink'>Contact</NavLink>
                        <NavLink to={'/about'} className='navlink'>About</NavLink> */}
                        <a href="/#" >Home</a>

                        <div className="relative group">
                            <a href="#service" className="flex flex-col">Services</a>

                            {/* Dropdown container */}
                            <div className="absolute left-2 top-full pt-5 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                <div className="bg-gray-300 px-4 w-[200px] py-5 rounded-lg shadow-md">
                                    <ul className="flex flex-col gap-3 cursor-pointer">
                                        <li className="text-black hover:text-black/55"><a href="#service"> Our Service</a></li>
                                        <li className="text-black hover:text-black/55"><a href="#case-studies"> Case Studies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <a href="#about" className="flex flex-col">About</a>

                            {/* Dropdown container */}
                            <div className="absolute left-2 top-full pt-5 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                                <div className="bg-gray-300 px-4 w-[200px] py-5 rounded-lg shadow-md">
                                    <ul className="flex flex-col gap-3 cursor-pointer">
                                        <li className="text-black hover:text-black/55"><a href="#testimonial">Testimonial</a></li>
                                        <li className="text-black hover:text-black/55"><a href="#team">Meet Our Team</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <a href="#contact" >Contact</a>
                    </div>
                    <button className='px-7 py-5 border rounded-4xl border-gray-500 uppercase font-semibold hover:text-white hover:border-[#6F26C2] hover:bg-[#6F26C2] cursor-pointer transition-all ease-in-out' onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
