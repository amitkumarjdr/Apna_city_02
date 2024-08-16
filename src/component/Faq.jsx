import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import img1 from "../images/Group 2377.png";

export default function Faq() {

    const [active, setActive] = useState(0)

    let faqItem = [
        {
            question: 'Where is it located?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s",
        },
        {
            question: 'How far is SMART CITY from Aero City ?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'How many Plot units are there?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'What is the total land area?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'What is the area of the plots?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'Are the plots ready to register?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
    ]

    return (
        <div className='md:flex justify-between md:h-[700px] md:mb-20' id='faq'>
            <section className="bg-[#076280] sm:basis-[60%] dark:bg-gray-900 ">
                <div className="sm:px-12 px-6">
                    <p className='md:text-[50px] text-[40px] text-white w-[200px] border-b-[2px] border-b-white leading-tight my-4 '>
                    FAQ
                    </p>
                    <p className='md:text-[21px] text-[16px] text-white  '>
                    Adj. Bharat Petrol Pump, Near Upcoming Aerocity Extension, Mohali
                    </p>
                    <div className=" space-y-2 sm:pt-12 pt-8 py-2 md:py-6">
                        {
                            faqItem.map((item, index) => (
                                <div key={index} className=" text-white " >
                                    <button className="flex items-center justify-start gap-4 pb-4 w-full py-2 border-b " onClick={() => setActive(index)}>
                                        <div className='flex justify-center items-center bg-white text-[#076280] lg:size-[25px] md:size-[20px] size-[18px] text-[14px] rounded-[3px] '>
                                            <FontAwesomeIcon icon={(active == index) ? faMinus : faPlus} />
                                        </div>
                                        <p className="lg:text-[24px]  md:text-[20px] sm:text-[16px] text-[14px] font-[700]  ">
                                            {item.question}
                                        </p>
                                    </button>
                                    {/* <hr class="border-[#C0BCBC]" /> */}
                                    <p className={`lg:text-[21px] md:text-[17px] md:pb-6 pb-1 sm:text-[14px] text-[12px] font-[500]  px-8 py-2   ${(active == index) ? "block" : "hidden"}`}>
                                        {item.answer}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <div className='sm:basis-[40%] md:w-full md:h-full h-[400px]  ' >
                <img className="w-full h-full   " src={img1} alt="" />
            </div>
        </div>
    )
}
