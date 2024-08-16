import React from 'react'
import Heading from './Heading'
import img1 from "../images/Rectangle 652.png";
import img2 from "../images/Rectangle 653.png";
import img3 from "../images/Rectangle 654.png";
import img4 from "../images/Rectangle 655.png";
import img5 from "../images/Rectangle 656.png";
import img6 from "../images/Rectangle 657.png";

export default function Gallery() {
    return (
        <div className='lg:container mx-auto lg:pb-20 pb-12'>
            <Heading heading='PROJECT GALLERY' text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className=' space-y-4 '>
                <div className='flex justify-between sm:gap-4 gap-2'>
                    <div className='sm:rounded-[16px] rounded-[8px] overflow-hidden md:w-[423px] sm:w-[323px] md:h-[325px] sm:h-[225px] '>
                        <img className='w-full h-full ' src={img1} alt="" />
                    </div>
                    <div className='sm:rounded-[16px] rounded-[8px] overflow-hidden md:w-[540px] sm:w-[323px] md:h-[325px] sm:h-[225px] '>
                        <img className='w-full h-full ' src={img2} alt="" />
                    </div>
                    <div className='sm:rounded-[16px] rounded-[8px] overflow-hidden md:w-[316px] sm:w-[323px] md:h-[325px] sm:h-[225px] '>
                        <img className='w-full h-full ' src={img3} alt="" />
                    </div>
                </div>
                <div className='flex justify-between sm:gap-4 gap-2'>
                    <div className='sm:rounded-[16px] rounded-[8px] overflow-hidden md:w-[423px] sm:w-[323px] md:h-[325px] sm:h-[225px] '>
                        <img className='w-full h-full ' src={img4} alt="" />
                    </div>
                    <div className='sm:rounded-[16px] rounded-[8px] overflow-hidden md:w-[313px] sm:w-[323px] md:h-[325px] sm:h-[225px]  '>
                        <img className='w-full h-full ' src={img6} alt="" />
                    </div>
                    <div className='sm:rounded-[16px] rounded-[8px] overflow-hidden md:w-[540px] sm:w-[323px] md:h-[325px] sm:h-[225px] '>
                        <img className='w-full h-full ' src={img5} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
