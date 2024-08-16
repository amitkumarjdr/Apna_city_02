
import React from 'react'
import leftimg from '../images/Group 1528.png';
import rightimg from '../images/Group 1529.png';

export default function Heading({ heading, text }) {
    return (
        <div className='  lg:pt-10 pt-5 container mx-auto '>
            <div className='flex justify-between items-center'>
                <div className=' lg:w-[400px] md:w-[350px] sm:w-[250px] w-[200px]'>
                    <img className='w-full h-full' src={leftimg} alt="" />
                </div>
                <h1 className={` text-[25px] text-center uppercase leading-tight text-[#076280] font-[700] md:text-[30px] lg:text-[38px] relative  lg:px-12`} >
                    <span >
                        {heading}
                    </span>
                </h1>
                <div className='lg:w-[400px] md:w-[350px] sm:w-[290px] w-[200px]'>
                    <img className='w-full h-full' src={rightimg} alt="" />
                </div>
            </div>

            <p className="lg:mb-12 mb-6 mt-5 text-center capitalize font-normal text-[#5D615B] lg:text-[20px] md:text-[17px] sm:text-[14px] text-[13px] sm:px-16 lg:px-[250px]  px-16 dark:text-gray-400" >
                {text}
            </p>

        </div>

    )
}
//after:w-[22%]