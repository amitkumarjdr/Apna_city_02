import React from 'react'
import Heading from './Heading';
import img01 from "../images/Group 1443.png";
import img02 from "../images/Group 1444.png";

export default function LocationVideo() {
    
    return (
        <div className='lg:container mx-auto lg:pt-12'>
            <Heading heading='EXPERIENCE THE LOCATION' text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full lg:h-[390px] md:h-[290px] h-[190px]  overflow-hidden'>
                    {/* <iframe className='w-full h-full' src="" title="YouTube video player"  ></iframe> */}
                    <img className='w-full h-full ' src={img01} alt="" />
                </div>
                <div className='w-full lg:h-[390px] md:h-[290px] h-[190px] '>
                    {/* <iframe className='w-full h-full' src="" title="YouTube video player" ></iframe> */}
                    <img className='w-full h-full ' src={img02} alt="" />
                </div>
            </div>
        </div>
    )
}
