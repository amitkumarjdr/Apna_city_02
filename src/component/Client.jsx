import React from 'react';
import img1 from "../images/Rectangle 707.png";
import clientImg from "../images/Ellipse 34.png";
import coma from "../images/”.png";

export default function Client() {
    return (
        <div className='flex justify-start items-center relative '>
            <div className='lg:h-[503px] md:h-[450px] sm:h-[400px] h-[300px] basis-[59%] z-[-1] '>
                <img className='w-full h-full ' src={img1} alt="" />
            </div>
            <div className='lg:w-[600px] md:w-[500px]  sm:w-[400px] w-[200px] absolute sm:bottom-24 right-0 z-[1] rounded-[13px] border border-b-[5px] border-b-[#076280] lg:p-8 md:p-2 p-1  bg-white'>
                <div className='flex justify-start items-center gap-5 border-b-[.55px] border-b-[#777171] py-3 '>
                    <div className='lg:size-[120px] md:size-[100px] sm:size-[80px] size-[40px] rounded-full overflow-hidden'>
                        <img className='w-full h-full ' src={clientImg} alt="" />
                    </div>
                    <p className='lg:text-[24px] md:text-[21px] sm:text-[17px] text-[12px] text-[#656262]  '>
                        Mukesh Singh
                    </p>
                    <div className='absolute sm:w-[60px] sm:h-[60px] w-[20px] h-[20px] sm:right-5 right-1 top-5 sm:p-2'>
                        <img className='w-full h-full ' src={coma} alt="" />
                    </div>
                </div>
                <div className='text-[#493E3E] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[7px] py-3 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the
                    1500s, when an unknown
                </div>
            </div>
        </div>
    )
}
