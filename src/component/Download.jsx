import React from 'react'
import bgImg from "../images/Rectangle 715.png";
import arrow1 from "../images/Vector (2).png";
import arrow2 from "../images/Vector (1).png";

export default function Download() {

    let btn = ["Brochure", "Price List", "Site Plan"]

    return (
        <div className='md:my-24 my-5' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='lg:container mx-auto flex justify-center items-center flex-wrap py-24 gap-4 lg:space-x-12'>
                {
                    btn.map((item, index) => (
                        <div key={index} className='lg:w-[356px] w-[250px] h-[70px] lg:h-[90px] bg-[#076280] p-1 rounded-[50px] flex justify-around items-center overflow-hidden group' >
                            <div className='w-[30%]  h-full flex justify-center items-center rounded-[50px_0px_0px_50px] group-hover:bg-white'>
                                <div>
                                    <img className='w-full h-full group-hover:hidden ' src={arrow2} alt="" />
                                    <img className='w-full h-full hidden group-hover:block' src={arrow1} alt="" />
                                </div>
                            </div>
                            <div className='bg-white text-[#076280] lg:text-[33px] text-[25px] rounded-[0_50px_50px_0]  h-full w-[70%]  flex justify-center items-center group-hover:bg-[#076280] group-hover:text-white'>
                                {item}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
