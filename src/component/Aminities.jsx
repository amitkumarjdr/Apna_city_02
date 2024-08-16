import React from 'react'
import img1 from "../images/Rectangle 700.png";
import img2 from "../images/Rectangle 697.png";
import img3 from "../images/Rectangle 699.png";
import img4 from "../images/Rectangle 702.png";
import img5 from "../images/Rectangle 703.png";
import Heading from './Heading';
import mover from "../images/marketeq_lawn-mower.png";


export default function Aminities() {

    let images = [img1, img2, img5, img4]
    return (
        <div className='container mx-auto lg:pb-10 sm:mt-20 md:mt-36 lg:mt-[400px] '>
            <Heading heading='Amenities' text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className='grid sm:grid-rows-2 grid-rows-1 sm:grid-flow-col gap-2' >
                {
                    images.map((item,index) => (
                        <div key={index} className=' relative group h-[250px] sm:h-auto'>
                            <img className='w-full h-full ' src={item} alt="" />
                            <div className='absolute lg:w-[323px] md:w-[200px] lg:px-6 sm:px-1 px-4 lg:py-3 sm:py-1 py-2 bg-[#076280CC] z-[1] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]  text-center opacity-0 group-hover:opacity-100 duration-300'>
                                <div className='lg:size-[82px] md:size-[62px] sm:size-[42px] size-[62px] mx-auto '>
                                    <img className='w-full h-full ' src={mover} alt="" />
                                </div>
                                <p className='lg:text-[32px] md:text-[22px] sm:text-[16px] text-[19px] text-white font-[500] border-b border-b-white '>
                                    lawn
                                </p>
                                <p className='lg:text-[14px] md:text-[13px] sm:text-[11px] text-[16px] text-white text-center '>
                                    Adj. Bharat Petrol Pump, Near
                                    Upcoming Aerocity Extension, Mohali
                                </p>
                            </div>
                        </div>
                    ))
                }

                <div className='row-span-2 relative group h-[350px] sm:h-auto '>
                    <img className='w-full h-full object-fill ' src={img3} alt="" />
                    <div className='absolute lg:w-[323px] md:w-[200px] lg:px-6 px-4 lg:py-3 py-2 bg-[#076280CC] z-[1] top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%]  text-center opacity-0 group-hover:opacity-100 duration-300'>
                                <div className='lg:size-[82px] md:size-[62px] sm:size-[42px] size-[62px] mx-auto '>
                                    <img className='w-full h-full ' src={mover} alt="" />
                                </div>
                                <p className='lg:text-[32px] md:text-[22px] sm:text-[16px] text-[19px] text-white font-[500] border-b border-b-white '>
                                    lawn
                                </p>
                                <p className='lg:text-[14px] md:text-[13px] sm:text-[11px] text-[16px] text-white text-center '>
                                    Adj. Bharat Petrol Pump, Near
                                    Upcoming Aerocity Extension, Mohali
                                </p>
                            </div>
                </div>
            </div>
        </div>
    )
}

