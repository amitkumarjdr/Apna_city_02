import React from 'react'
import bgImg from "../images/Rectangle 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileScreen, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Enquiry() {
    return (
        <div className='relative'>
            <div id='topview'
                className='w-[100%]  xl:h-[800px] lg:h-[700px] md:h-[500px] sm:h-[400px] h-[300px] py-4 bg-no-repeat bg-cover  grid grid-cols-2 justify-center items-center bannergradeint'
                style={{
                    backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0.8 ) 5.24%, rgba(0, 0, 0, 0) 49.76%) ,url(${bgImg}) `,
                    backgroundAttachment: "fixed",
                }}>
                <ul className='text-white  leading-none ps-12'>
                    <li className='lg:text-[50px] md:text-[33px] sm:text-[26px] text-[20px] sm:text-nowrap'>
                        ADVANTAGES OF INVESTING IN
                    </li>
                    <li className='xl:text-[136px] ps-0 lg:text-[100px] md:text-[80px] sm:text-[50px] text-nowrap text-[30px]  py-2'>
                        RESIDENTIAL <br /> PLOTS
                    </li>
                    <li className='lg:text-[20px] md:text-[17px] sm:text-[15px] text-[12px] lg:leading-7 sm:text-nowrap '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                        Lorem Ipsum has been the industry's standard dummy text ever since
                    </li>
                </ul>
            </div>
            <div className='container mx-auto rounded-[23px] bg-[#076280] text-center lg:py-8 py-4 sm:absolute sm:bottom-0  sm:left-1/2 sm:transform sm:translate-x-[-50%] sm:translate-y-[50%]'>
                <p className='text-white lg:text-[45px] md:text-[30px] sm:tex-[20px]  font-[700] uppercase'>
                    Are you interested in FREE Site Visit
                </p>
                <form action="" className='  lg:pt-4 text-center ps-7 space-y-4'>
                    <div className="relative inline-block pe-12">
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            htmlFor="username"
                            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all text-[#42A4C5] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] "
                        >
                            <FontAwesomeIcon className='text-white' icon={faUser} />   Name
                        </label>
                    </div>
                    <div className="relative inline-block pe-12">
                        <input
                            id="mobile"
                            name="mobile"
                            type="text"
                            className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            htmlFor="mobile"
                            className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all text-[#42A4C5] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
                        >
                            <FontAwesomeIcon className='text-white' icon={faMobileScreen} />   Enter Mobile no
                        </label>
                    </div>
                    <div className="relative inline-block pe-12">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0   top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all text-[#42A4C5] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]  "
                        >
                            <FontAwesomeIcon className='text-white' icon={faEnvelope} />   Enter Email Id
                        </label>
                    </div>

                    <button
                        type="button"
                        className="rounded-md lg:ms-12 lg:my-0 mx-auto  my-3 lg:inline block bg-white px-7 py-2 lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] font-semibold text-[#076280] shadow-sm hover:bg-[#076280] hover:text-white hover:border hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-black"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}
