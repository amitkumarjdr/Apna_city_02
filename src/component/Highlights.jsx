import React from 'react'
import buildingImg1 from "../images/Group.png";
import buildingImg2 from "../images/Group (1).png";
import borderLine from "../images/Rectangle 695.png";
import Heading from './Heading';


export default function Highlights() {

    let title = [
        "price",
        "size",
        "garden",
        "airport",
        "Infosys & IT City ",
        "price",
        "size",
        "garden",
        "airport",
        "Infosys & IT City ",
    ];

    return (
        <div className='lg:container mx-auto' id='project highlights'>
            <Heading heading="HIGHLIGHTS of smart city" text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className='flex justify-around items-center sm:space-x-3 space-x-2 flex-wrap space-y-4 '>
                {
                    title.map((item, index) => (
                        <div key={index} className='text-center group '>
                            <div className='sm:size-[135px] size-[100px] rounded-full border-[5px] border-[#076280] flex justify-center items-center relative mx-auto group-hover:bg-[#076280]'>
                                <img className='block group-hover:hidden ' src={buildingImg1} alt="" />
                                <img className=' hidden group-hover:block  ' src={buildingImg2} alt="" />
                                <div className='sm:size-[60px] size-[50px] absolute rounded-full bg-[#076280] flex justify-center items-center sm:text-[24px]  text-white translate-x-[-60px] sm:translate-x-[-80px] border-[5px] border-white'>
                                    {(index < 9) ? ("0" + (index + 1)) : index + 1}
                                </div>
                            </div>
                            <div className='text-center md:w-[241px] sm:w-[200px] w-[145px] h-[102px]  bg-center  bg-no-repeat mx-auto sm:mt-4 pt-2 bg-contain' style={{ backgroundImage: `url(${borderLine})` }}>
                                <p className='lg:text-[16px] text-[13px] text-[#076280] font-[700] capitalize pt-3'>
                                    {item}
                                </p>
                                <p className='lg:text-[16px] text-[12px] text-[#666666] font-[500] pt-2'>
                                    Just 5 Mins Drive From <br /> Infosys & IT City Mohali
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
