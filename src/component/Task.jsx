import React from 'react'
import bgImg from "../images/Group 1420.png";
import flagImg from "../images/Group 1489.png";
import cornerImg1 from "../images/Vector 67.png";
import cornerImg2 from "../images/Vector 68.png";
import cornerImg3 from "../images/Vector 68 (1).png";
import cornerImg4 from "../images/Vector 67 (1).png";

export default function Task() {

    let taskData = [
        {
            num: "446",
            title: "plots"
        },
        {
            num: "22",
            title: "ACRES"
        },
        {
            num: "20",
            title: "LIFESTYLE AMENITIES"
        },
        {
            num: "20",
            title: "lakhs"
        },
    ]

    return (
        <div className='w-full h-[254px] py-4  md:my-28 sm:my-10 my-5 bg-top bg-no-repeat flex justify-center items-center ' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='lg:container mx-auto flex justify-evenly flex-wrap items-center gap-4 relative '>
                {
                    taskData.map((item, index) => (
                        <div key={index} className={`text-center lg:w-[215px] md:w-[155px] w-[130px] lg:h-[194px] md:h-[174px] h-[100px] relative pt-5 leading-tight lg:after:w-[0.5px]  after:absolute after:bg-white after:top-[50px] after:left-[8%] ${index === taskData.length - 1 ? 'after:h-0' : 'after:h-[90px]'}`}>
                            <div className='lg:size-[60px] md:size-[50px] sm:size-[40px] size-[30px] mx-auto '>
                                <img className='w-full h-full ' src={flagImg} alt="" />
                            </div>
                            <ul>
                                <li className='text-white lg:text-[53px] md:text-[40px] sm:text-[30px] text-[25px] font-[700] '>{item.num}</li>
                                <li className='text-white lg:text-[21px] md:text-[18px] sm:text-[15px] text-[13px] font-[500] text-wrap uppercase'>{item.title}</li>
                            </ul>
                            <div className=''>
                                <img className='absolute top-0 left-0' src={cornerImg1} alt="" />
                                <img className='absolute top-0 right-0' src={cornerImg2} alt="" />
                                <img className='absolute bottom-0 right-0' src={cornerImg3} alt="" />
                                <img className='absolute bottom-0 left-0' src={cornerImg4} alt="" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
