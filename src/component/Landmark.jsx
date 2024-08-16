import React, { useState } from 'react'
import Heading from './Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import landImg from "../images/Rectangle 603.png"
import leftimg from "../images/Group 1638.png";
import rightimg from "../images/Group 1639.png";


export default function Landmarks() {

    const [active, setActive] = useState(0)

    let faqItem = [
        {
            question: " Education CENTER",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: " Hospital",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: " School",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: "CENTRAL PARK",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: " SHOPPING CENTER",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: "railway station  ",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },

    ]

    return (
        <div className=' lg:pt-9 lg:pb-24 '>
            <div className='  lg:pt-10 pt-5 '>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={leftimg} alt="" />
                    </div>
                    <h1 className={` text-[25px] text-center uppercase leading-tight text-white font-[700] md:text-[30px] lg:text-[38px] relative `} >
                        IMPORTANT LANDMARKS
                    </h1>
                    <div>
                        <img src={rightimg} alt="" />
                    </div>
                </div>

                <p className="lg:mb-12 mb-6 mt-5 text-[13px] text-center capitalize font-normal text-white lg:text-[20px] sm:px-16 lg:px-[250px] dark:text-gray-400" >
                    Adj. Bharat Petrol Pump, Near Upcoming Aerocity Extension, Mohali
                </p>

            </div>
            <div className='sm:flex justify-between bg-white container mx-auto lg:h-[645px] md:h-[400px] h-full' >
                <section className="md:basis-[50%]  basis-[100%] lg:px-4 dark:bg-gray-900  md:pt-6">
                    <div className="px-4 ">
                        <div className="lg:mt-4 lg:h-[600px]  md:h-[400px] sm:h-[350px] sm:py-2 overflow-y-auto landmark_Scroll md:py-6 pb-4 sm:pe-5 lg:pe-0">
                            {
                                faqItem.map((item, index) => (
                                    <div key={index} className="  bg-white border-b border-b-[#DDDADA] px-2">
                                        <button className="flex items-center justify-between gap-4 w-full px-2 pt-7" onClick={() => setActive(index)}>
                                            <p className="lg:text-[25px] md:text-[20px] sm:text-[16px] text-[14px] font-[700] text-[#076280] uppercase">
                                                 {item.question}
                                            </p>
                                            <div className='flex justify-center items-center text-[#076280] lg:size-[30px] md:size-[20px] size-[18px] text-[14px] '>
                                                <FontAwesomeIcon icon={(active == index) ? faAngleDown : faAngleRight} />
                                            </div>
                                        </button>
                                        <p className={` md:text-[17px] sm:text-[14px] text-[12px] font-[500] text-[#5E6165]  px-2 py-1   ${(active == index) ? "block" : "hidden"}`}>
                                            {item.answer}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <div className='w-full lg:h-[645px]  md:h-[400px] sm:h-[350px] h-full '>
                    <img className='w-full h-full ' src={landImg} alt="" />
                </div>
            </div>
        </div>

    )
}


// how to create a modal in react js?