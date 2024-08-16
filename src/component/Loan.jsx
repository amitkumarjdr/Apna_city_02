import kotak from "../images/Group 1466.png"
import icici from "../images/image 7.png"
import sbi from "../images/SBI-Logo 1.png"
import bob from "../images/image 8.png"
import Heading from "./Heading"

export default function Loan() {

    let bankImg = [kotak, icici, sbi, bob]

    return (
        <div className="sm:pt-12  lg:pt-16  lg:container mx-auto">
            <Heading heading='HOME LOAN FACILITY' text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className="flex sm:space-y-2  lg:px-12 lg:justify-between justify-around flex-wrap gap-4 sm:my-9 mx-auto">
                {
                    bankImg.map((bank, index) => (
                        <div key={index} className="shadow-[0px_0px_4px_1px_#00000040] rounded-[17px] lg:w-[255px] lg:h-[95px] md:w-[220px] sm:w-[35%] w-[25%] mx-2  h-[80px] overflow-hidden px-3 flex justify-center items-center">

                            <div key={index} className=" " >
                                <img className="w-[100%] h-[100%]" src={bank} alt="bank Image" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

