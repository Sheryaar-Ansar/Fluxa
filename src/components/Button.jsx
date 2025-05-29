import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='px-7 py-4 border-[#6F26C2] bg-[#6F26C2] text-white rounded-4xl hover:shadow-lg hover:shadow-[#6F26C2] transition-all ease-in-out cursor-pointer uppercase font-[600]'>{name}</button>
        </div>
    )
}

export default Button
