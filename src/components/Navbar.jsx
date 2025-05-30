import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    // const navigate = useNavigate()
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
                        <a href="">Home</a>
                        <a href="#service">Services</a>
                        <a href="">Contact</a>
                        <a href="#about">About</a>
                    </div>
                    <button className='px-7 py-5 border rounded-4xl border-gray-500 uppercase font-semibold hover:text-white hover:border-[#6F26C2] hover:bg-[#6F26C2] cursor-pointer transition-all ease-in-out' onClick={()=>navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
