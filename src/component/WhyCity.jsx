import rainImg from "../images/Union (1).png";
import img from "../images/Rectangle 676.png"

export default function WhyCity() {

    let text = [
        "Storm water Drain",
        "Bank approved Project",
        "24X7 SECURITY",
        "Ready to Contract ",
        "KIDS PLAY AREA",
        " Fully lighted Campus",
        "Good Connectivity ",
        "Storm water Drain  ",
        "Fully lighted Campus ",
        "KIDS PLAY AREA"
    ]

    return (
        <div className='bg-[#076280] lg:container mx-auto rounded-[19px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 overflow-hidden md:my-5 sm:my-12 lg:mt-[150px]'>
            <div className='text-white py-4 px-8 flex flex-col sm:justify-evenly md:justify-center items-center'>
                <p className='lg:text-[50px] md:text-[38px] text-[28px] font-[700]  '>
                    WHY SMART CITY ?
                </p>
                <div className='lg:text-[17px] md:text-[15px] text-[13px]  font-[500] space-y-4'>
                    <p>
                        Lorem Ipsum is simply dummy text of
                        the printing industry. Lorem Ipsum has been
                        the industry's standar dummy the 1500s, when
                        an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of
                        the printing industry. Lorem Ipsum has been
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:py-9 py-4 px-3">
                {
                    text.map((item, index) => (
                        <div key={index} className={`flex justify-start items-center ${index < 8 ? 'border-b border-gray-300' : ''} ps-4 ${index % 2 === 0 ? 'border-r border-gray-300' : ''}`}>
                            <div className="lg:size-[44px]">
                                <img className="w-full h-full" src={rainImg} alt="" />
                            </div>
                            <p className="lg:text-[18px] text-[14px] font-[500] text-white ps-5 pe-2">{item}</p>
                        </div>
                    ))
                }
            </div>

            <div className="lg:col-span-1 sm:col-span-2 lg:h-auto md:h-[350px] sm:h-[260px] h-[250px] ">
                <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
        </div>
    )
}
