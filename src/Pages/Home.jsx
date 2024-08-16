
import Navbar from "../component/Navbar";
import Enquiry from "../component/Enquiry";
import Preview from "../component/Preview";
import WhyCity from "../component/WhyCity";
import Products from "../component/Products";
import MorePlot from "../component/MorePlot";
import PriceList from "../component/PriceList";
import LocationVideo from "../component/LocationVideo";
import SitePlan from "../component/SitePlan";
import Location from "../component/Location";
import Landmarks from "../component/Landmark";
import Aminities from "../component/Aminities";
import Gallery from "../component/Gallery";
import Faq from "../component/Faq";
import Testimonial from "../component/Testimonial";
import Map from "../component/Map";
import Loan from "../component/Loan";
import Footer from "../component/Footer";
import Download from "../component/Download";
import banner from "../images/Group 2369.png";
import Highlights from "../component/Highlights";
import MasterPlan from "../component/MasterPlan";
import Task from "../component/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCommentDots, faIndianRupeeSign, faPhone } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../images/Group 2327.svg";
import icon2 from "../images/Group 2328.svg";
import icon3 from "../images/Group.svg";
import icon4 from "../images/₹.svg";
import icon5 from "../images/Vector (5).svg";
import telephoneImg from "../images/Group 1723.png";
import { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";




export default function Home() {

    const [display, setDisplay] = useState("hidden")

    let icons = [
        {
            icon: <FontAwesomeIcon icon={faWhatsapp} />,
            titel: "Whatsapp"
        },
        {
            icon: <FontAwesomeIcon icon={faCommentDots} />,
            titel: "chat"
        },
        {
            icon: <FontAwesomeIcon icon={faPhone} />,
            titel: "call"
        },
        {
            icon: <FontAwesomeIcon icon={faIndianRupeeSign} />,
            titel: "price list"
        },
        {
            img: icon5,
            titel: "brochure"
        },
    ]

    const handleContact = () => {
        setDisplay("block")
    }
    const handleClose = (e) => {
        e.stopPropagation();
        setDisplay("hidden");
    };

    return (
        <>

            <Navbar />
            <Enquiry />
            <Preview />
            <Task />
            <WhyCity />
            <Products />
            <MorePlot />
            <PriceList />
            <MasterPlan />
            <Highlights />
            <div className='bg-[#0F5040] lg:h-[145px] md:mt-20 mt-6' >
                <img className='w-full h-full' src={banner} alt="" />
            </div>
            <LocationVideo />
            <SitePlan />
            <Location />
            <div className="bg-[#076280] lg:h-[540px] md:h-[450px] h-auto  ">
                <Landmarks />
            </div>
            <Aminities />
            <Gallery />
            <Faq />
            <Testimonial />
            <Map />
            <Loan />
            <Download />
            <Footer />
            <div className="fixed  bottom-20 md:right-20 right-4 z-10 bg-[#076280] size-[61px] flex justify-center items-center text-white rounded-full cursor-pointer " onClick={handleContact}>
                <FontAwesomeIcon className=" text-[26px]" icon={faBars} />
                <div className={`absolute w-[351px] px-4 py-5  top-[-260px] left-[-320px] bg-white rounded-[12px]   shadow-[0px_1.6px_6.38px_1.6px_#00000040] ${display} `} >
                    <p className="text-[15px] font-[700] text-black  ps-3 py-3">Contact us </p>
                    <button className="absolute right-3 top-3 text-[#076280] text-[18px] " onClick={handleClose}> X </button>
                    <div className="grid grid-cols-2 gap-4">
                        {
                            icons.map((item, index) => (
                                <div key={index} className="group border border-[#076280] rounded-[10px] flex justify-start items-center gap-3 px-4 py-2 text-[#076280] hover:bg-[#076280] hover:text-white">
                                    <div className="">
                                       {
                                        item.icon ? item.icon :<img className="group-hover:fill-white" src={item.img} alt="" />
                                       } 
                                    </div>
                                    <p className="group-hover:text-white capitalize">
                                        {item.titel}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="fixed rotate-[270deg] bottom-[50%] right-0 z-10 origin-bottom-right cursor-pointer">
                <div className="  bg-[#076280] px-4 py-2 rounded-t-[17px] flex  ">
                    <p className="text-[19px] font-[500] text-white uppercase">
                        contact us
                    </p>
                    <div className="rotate-90 ms-2">
                        <img src={telephoneImg} alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

