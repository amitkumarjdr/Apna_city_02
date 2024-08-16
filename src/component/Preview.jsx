import preImg from "../images/Rectangle 672.png";
import img01 from "../images/Union.png";
import img02 from "../images/Group 1526.png";
import img03 from "../images/Group 1525.png";

export default function Preview() {

    let cardObj = [
        {
            img: img01,
            title: "Plot Size",
            text: "80/100/110/137 Sq.Yards",
        },
        {
            img: img01,
            title: "Price Starts From",
            text: "₹20 Lakhs",
        },
        {
            img: img02,
            title: "RERA Approved",
            text: "PBRERA-SAS81-PR0693",
        },
        {
            img: img03,
            title: "Possession",
            text: " Immediate",
        },
    ]

    return (
        <div className='lg:container mx-auto md:flex justify-between relative sm:mt-32 md:mt-[250px] mt-6' id="overview">
            <div className="basis-[50%] pe-9 sm:pt-9">
                <p className='lg:text-[38px] text-[28px] md:text-start ps-5 text-center font-[700] text-[#076280]  '>
                    PROJECT OVERVIEW
                </p>
                <p className='text-[#3F3E3E] lg:text-[21px] md:text-[15px] sm:text-left sm:ps-4 ps-4 text-justify  font-[600]  py-6'>
                    Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </div>
            <div className="md:absolute bg-[#076280] shadow-[0px_0px_3.74px_1.87px_#00000040] grid sm:grid-cols-2 grid-cols-1  lg:gap-8  py-9 rounded-[12px] bottom-7 mx-auto pt-5">
                {
                    cardObj.map((item, index) => (
                        <div key={index} className="flex justify-start items-center md:ps-3 sm:ps-16 ps-[20%] space-y-2">
                            <div className="lg:w-[52px] lg:h-[52px]  w-[42px] h-[42px] ">
                                <img className="w-full h-full" src={item.img} alt="" />
                            </div>
                            <div className="text-white ms-3 ps-3 border-s ">
                                <p className="lg:text-[19px] md:text-[14px] font-[700] ">{item.title}</p>
                                <p className="lg:text-[19px] md:text-[12px] font-[400] text-nowrap">{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="basis-[60%] w-full lg:h-[652px] md:h-[500px] md:pt-0 pt-3  ">
                <img className="w-full h-full  " src={preImg} alt="" />
            </div>
            
        </div>
    )
}

