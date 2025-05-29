import React, { useEffect, useState } from 'react'


const Counter = ({ end, label, sign, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
            let start = 0;
            const increment = end / (duration / 50);

            const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                    start = end
                    clearInterval(timer)
                }
                setCount(Math.floor(start))
            }, 50)
            return () => clearInterval(timer)
    }, [end, duration])  
    return (
        <div className='w-full bg-[#2C2B3C] py-10 text-white flex flex-col items-center'>
            <h2 className='text-6xl font-bold'>{count}{typeof end === 'number' ? [sign] : ''}</h2>
            <p className='text-lg'>{label}</p>
        </div>
    )
}

export default Counter


