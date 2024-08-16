
import React, { useState } from 'react'
import Heading from './Heading';
import villaImg from "../images/Rectangle 681.png";
import KothiImg from "../images/Rectangle 681 (1).png";
import officeImg from "../images/Rectangle 681 (2).png";
import squareBox from "../images/Vector.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Villa from './Villa';
import { faIndianRupeeSign, faKey, faMinimize, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import enquiryImg from "../images/Rectangle 683.png";

export default function Products() {

    let [activeProduct, setActiveProduct] = useState(0)

    let productsBtn = ["All", "Villa", "Kothi", "Office", "Shop"]

    let productDetail = [
        {
            name: "Luxury Kothi",
            img: villaImg,
        },
        {
            name: "Luxury Kothi",
            img: KothiImg,
        },
        {
            name: "Luxury Kothi",
            img: officeImg,
        },
    ]



    return (
        <div className='lg:pt-9  lg:container mx-auto ' id='oUR PRODUCTS'>
            <Heading heading="our products " text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className="text-sm font-medium text-center text-gray-500 border-b border-[#CCCCCC] dark:text-gray-400 dark:border-gray-700 ">
                <ul className='flex  border-b border-b-[#CCCCCC]   '>
                    {
                        productsBtn.map((item, index) => (
                            <li key={index} className=' relative capitalize cursor-pointer text-[#076280] lg:text-[20px] text-[18px] font-[700] lg:mx-6 sm:mx-5  lg:px-6 px-3 pb-2  ' onClick={() => setActiveProduct(index)}>
                                <span className={` ${(activeProduct == index) ? "after:absolute after:w-[100%] after:mx-2 after:h-[5px] after:bottom-[-7%] after:rounded-[15px] after:left-[-10%] after:bg-[#076280]" : " "} `}>
                                    {item}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                (activeProduct == 0) ?
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-12 lg:pb-20 pb-6 sm:pb-16'>
                        {
                            productDetail.map((product, index) => (
                                <div key={index} className=' relative rounded-[9px] overflow-hidden shadow-[0px_0px_4.79px_1px_#00000040] group'>
                                    <div className=' h-[316px] relative'>
                                        <img className='w-full h-full ' src={product.img} alt="" />
                                        <div className='w-[160px] h-[15px] rounded-[20px] bg-[#076280] absolute bottom-0  left-1/2 transform translate-x-[-50%] translate-y-[50%] z-[-1]'>

                                        </div>
                                    </div>
                                    <div className='border-b py-3 mx-2 px-1 flex justify-between items-center border-b-[#CCCCCC]'>
                                        <p className='text-[#076280] lg:text-[30px] md:text-[18px] sm:text[16px]  font-[700] '>
                                            {product.name}
                                        </p>
                                        <div className='flex  justify-center items-center lg:gap-3 gap-2'>
                                            <div className='xl:w-auto xl:h-auto w-[18px] h-[22px] '>
                                                <img src={squareBox} alt="" />
                                            </div>
                                            <p className='lg:text-[19px] md:text-[15px] sm:text-[12px] text-[11px] text-[#404348] font-[700] '>
                                                300
                                            </p>
                                        </div>
                                    </div>
                                    <div className='  lg:text-[19px] text-[13px]  gap-3 text-[#404348] font-[600]  py-2 px-4 space-y-2 sm:pb-20 pb-16'>
                                        <p className='flex justify-start items-center gap-2'>
                                            <FontAwesomeIcon className='text-[#076280] ' icon={faMinimize} />  100/120/150/sq.yards
                                        </p>
                                        <p className='flex justify-start items-center gap-3'>
                                            <FontAwesomeIcon className='text-[#076280] ' icon={faIndianRupeeSign} />  Start From 20 lakh
                                        </p>
                                        <p className='flex justify-start items-center gap-2   text-[#404348] font-[600] '>
                                            <FontAwesomeIcon className='text-[#076280] ' icon={faKey} />  Under CONSTRUCTION
                                        </p>
                                    </div>
                                    <div className='absolute justify-between w-full flex items-center  bg-[#076280] gap-4 xl:bottom-[-8%] lg:bottom-[-12%] bottom-[-9%] left-0 group-hover:bottom-0'>
                                        <button className='border-0 text-[8px] text-white sm:text-[13px] px-2 gap-2 flex justify-between items-center sm:py-3 py-1 ps-7'>
                                            <FontAwesomeIcon className='bg-[#BD9944] text-white size-[24px] p-1 ' icon={faWhatsapp} />
                                            Whatsapp
                                        </button>
                                        <div className='h-full bg-no-repeat bg-cover' style={{ backgroundImage: `url(${enquiryImg})` }}>
                                            <p className='flex justify-center items-center gap-1 sm:text-[16px] text-[8px] text-white h-full py-4 px-9  ' >
                                                <FontAwesomeIcon icon={faPaperPlane} /> Enquire now
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            ))

                        }


                    </div>
                    :
                    (activeProduct == 1) ?
                        <Villa text="Villa" /> :
                        (activeProduct == 2) ?
                            <Villa text="Kothi" /> :
                            (activeProduct == 3) ?
                                <Villa text="Office" /> :
                                (activeProduct == 4) ?
                                    <Villa text="Shop" /> : ''}


        </div>
    )

}




{/* <div className='absolute right-0 mt-[-60px] lg:ms-[45px]   group  bg-white  border border-[#276658] px-3 '>
                                        
                                        
                                       
                                    </div> */}


