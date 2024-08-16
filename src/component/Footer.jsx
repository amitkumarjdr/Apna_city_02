
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Group 1481.png";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import footerLogo from "../images/Group 1481.png";


export default function Footer() {

    let projectDetail = ['overview',
        'project highlights ',
        'site plan ',
        'location',
        'price  list'
    ];

    let otherDetails = ['Gallery',
        'Help & Supports',
        'Terms of Service',
        'Contact Us'
    ]

    return (
        <div className="bg-[#07303E] my-5  relative" >
            <div className="container mx-auto flex lg:justify-end flex-wrap  pb-9 pt-7">
                <div className="bg-[#076280] lg:w-[350px] lg:absolute pt-16 px-6 pb-12 lg:bottom-0 bottom-5 lg:left-20 right-0">
                    <div className="inline-flex  items-center space-x-2">
                        <div className='w-[45px] h-[38px] '>
                            <img src={logo} alt="" />
                        </div>
                        <span className="font-[600] xl:text-[24px] text-[20px] text-nowrap text-[#FFFFFF] ">Apna City </span>
                    </div>
                    <p className="lg:text-[15px] sm:text-[12px] text-[10px] text-[#FCFCFC] font-[500] py-4">
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the
                        1500s, when an unknown
                    </p>
                    <p className="lg:text-[15px] sm:text-[12px] text-[10px] text-[#FCFCFC] font-[500] py-2 ">
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting
                    </p>
                </div>
                <div>
                    <ul className="list-disc xl:ps-24 ps-12  pt-9 xl:space-y-2">
                        {
                            projectDetail.map((item, index) => (
                                <li key={index} className="capitalize xl:text-[22px] md:text-[18px] text-[15px]  font-[700] text-[#FCFCFC]  cursor-pointer">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <ul className="list-disc xl:ps-24 ps-12 pt-9 xl:space-y-2">
                        {
                            otherDetails.map((item, index) => (
                                <li key={index} className="capitalize xl:text-[22px] md:text-[18px] text-[15px]  font-[600] text-[#FCFCFC]  cursor-pointer">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-4 xl:ps-24 ps-9 pt-9">
                    <ul className="flex justify-start items-center gap-3 xl:text-[19px] md:text-[16px] text-[14px] text-nowrap   text-[#FCFCFC] ">
                        <li className="xl:size-[43px] md:size-[30px] sm:size-[30px] p-1 rounded-full bg-[rgba(252,252,252,0.5)] flex justify-center items-center ">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </li>
                        <li className="">
                            <p>+91 1234567890</p>
                            <p>+91 1234567890</p>
                        </li>
                    </ul>
                    <ul className="flex justify-start items-center gap-3 xl:text-[19px] md:text-[16px] text-[14px] text-[#FCFCFC] ">
                        <li className="lg:size-[43px] md:size-[30px] md:px-3 p-1 sm:size-[30px] rounded-full bg-[rgba(252,252,252,0.5)] flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </li>
                        <li className="">
                            <p>Needhelp@gmail.com</p>
                            <p>sushma@gmail.com</p>
                        </li>
                    </ul>
                    <ul className="flex justify-start items-center gap-3 text-[#FCFCFC] xl:text-[19px] md:text-[16px] text-[14px] ">
                        <li className="xl:size-[43px] md:size-[30px] sm:size-[30px] p-1 rounded-full bg-[rgba(252,252,252,0.5)] flex justify-center items-center">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </li>
                        <li className=" cursor-pointer ">
                            <p >PR-7 Airport Road, </p>
                            <p>Zirakpur, Punjab</p>
                        </li>
                    </ul>
                 
                </div>
            </div>
        </div>
    )
}
