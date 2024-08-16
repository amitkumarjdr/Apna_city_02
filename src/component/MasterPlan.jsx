import React from 'react'
import bgImg from "../images/Group 1430.png";
import playImg from "../images/Group 1623.png";
import bgImg2 from "../images/Group 1622.png";

export default function MasterPlan() {
    return (
        <div className='w-full lg:h-[621px] md:h-[521px] sm:h-[421px] h-[300px] flex justify-between items-center overflow-hidden md:my-20 my-5' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='basis-[40%] h-full flex justify-center items-center'>
                <div className='lg:size-[208px] md:size-[150px] size-[100px] '> 
                    <img className='w-full h-full ' src={playImg} alt="" />
                </div>
            </div>
            <div className='basis-[60%] h-full flex flex-col justify-center items-center lg:px-20 bg-left' style={{ backgroundImage: `url(${bgImg2})` }}>
                <p className='text-white lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-[700] lg:px-20 px-16 leading-tight '>
                    Masterfully
                    Designed Masterplan
                </p>
                <p className='text-white lg:text-[20px] md:text-[17px] sm:text-[14px] text-[12px] font-[500] lg:px-20 px-16 '>
                    Your Dream Home Awaits you to Own Exquisite
                    Site in the Smart City.
                </p>
            </div>


        </div>
    )
}
