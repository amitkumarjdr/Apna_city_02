import React from 'react'
import iconImg from "../images/Group 1617.png";
import img1 from "../images/Rectangle 369.jpg";
import img2 from "../images/Rectangle 682.png";
import img3 from "../images/garden.jpg";
import img4 from "../images/novotel-dammam-business.jpg";
import Heading from './Heading';

export default function MorePlot() {

    let plotDetails = [
        {
            img: img1,
            title: "24X7 SECURITY",
        },
        {
            img: img2,
            title: "CLOSE TO EDUCATIONAL INSTITUTIONS",
        },
        {
            img: img3,
            title: "KIDS PLAY AREA",
        },
        {
            img: img4,
            title: "NEAR AERO CITY & IT CITY MOHALI",
        },
    ]

    return (
        <div>
            <Heading heading="MORE THAN JUST A PLOT " text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className='grid md:grid-cols-4 grid-cols-2 '>
                {
                    plotDetails.map((item, index) => (
                        <div key={index} className='group'>
                            <div className='flex justify-center items-center gap-2 sm:h-[68px]  h-[40px] bg-[#076280] group-hover:bg-[#BD9944]'>
                                <div className='md:w-[49px] md:h-[40px] sm:size-[35px] size-[30px] '>
                                    <img className='w-full h-full ' src={iconImg} alt="" />
                                </div>
                                <p className='md:text-[17px] sm:text-[14px] text-[13px] text-white '>
                                    {item.title}
                                </p>
                            </div>
                            <div className='md:h-[434px] h-[300px] w-full brightness-50 group-hover:brightness-100'>
                                <img className='w-full h-full ' src={item.img} alt="" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
