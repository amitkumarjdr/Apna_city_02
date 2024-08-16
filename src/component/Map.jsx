import React from 'react'
import bgImg from "../images/Rectangle 658.png";

export default function Map() {
    return (
        <div className='md:flex justify-between items-center lg:h-[366px] md:h-[332px] overflow-hidden '>
            <div className='basis-[62%] md:h-full h-[300px] relative'>
                <iframe className='w-full h-full border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.7038237816523!2d77.0255914745609!3d28.33756349741612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23594fec032b%3A0x94756d60681fd10f!2sLohagarh%20Farms!5e0!3m2!1sen!2sin!4v1718270299106!5m2!1sen!2sin" style={{ border: 0 }}  ></iframe>
                <div className='rounded-b-[20px] border border-[#C7C1C1] overflow-hidden absolute z-[1] top-0 translate-x-[50%] sm:left-[20%] '>
                    <button className='px-4 sm:py-2 py-1 bg-white text-[#076280] sm:text-[18px] text-[14px]'>
                        Near By
                    </button>
                    <button className='px-3 sm:py-2 py-1 text-white bg-[#076280] sm:text-[18px] text-[14px]'>
                        Google Map
                    </button>
                </div>
            </div>
            <div className='basis-[38%] text-center text-white lg:h-[366px]  ' style={{ backgroundImage: `url(${bgImg})` }}>
                <div className='bg-[rgba(7,98,128,0.7)] py-8 px-6'>

                    <p className='lg:text-[44px] text-[25px]  font-[700] leading-tight px-6'>
                        SCHEDULE YOUR SITE VISIT
                    </p>
                    <p className='lg:text-[17px] text-[14px] font-[500] py-2 px-5'>
                        If you are interested in a site visit, please
                        contact us immediately or visit us at the following
                        link to get assistance from our executives and
                        learn more about  our project and the benefits you
                        will receive here with us.
                    </p>
                    <div className='flex gap-4 px-4 text-center'>
                        <button className="button-55 my-4 lg:text-[14px] text-[10px] bg-white border border-white rounded-[0px_9.94px_0px_9.94px] text-[#076280] cursor-pointer inline-block lg:leading-[20px] lg:py-[10px] py-1 lg:px-[30px] px-4 text-center shadow-[rgba(7,98,128,0.9)_4px_4px_0_0,white_4px_4px_0_1px] " role="button">
                            <span className="text uppercase">Make a call  </span>
                        </button>
                        <button className="button-55 my-4 lg:text-[14px] text-[10px] bg-white border border-white rounded-[0px_9.94px_0px_9.94px] text-[#076280] cursor-pointer inline-block leading-[20px] lg:py-[10px] py-1 lg:px-[30px] px-4 text-center shadow-[rgba(7,98,128,0.9)_4px_4px_0_0,white_4px_4px_0_1px] " role="button">
                            <span className="text uppercase">downlead brochure   </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
