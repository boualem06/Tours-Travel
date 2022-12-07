import fb from "../pictures/fb.png"
import cse from "../pictures/cse.png"
import inst from "../pictures/inst.png"
import link from "../pictures/link.png"
import logo from "../pictures/logo.png"
import twi from "../pictures/twi.png"
import Elect from "../pictures/Elect.png"

const Contact = () => {

    return (
        <div className="mt-24 w-fit bg-cover h-fit overflow-hidden">
            <h1 className="text-5xl font-bold text-[#62006D] text-center">Contact Us</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 py-2 px-4 ">
                <div className="py-16">
                    <input className="border border-2 border-[#CA15EB] h-10 rounded-full w-full px-4 bg-[#FFD60B] shadow shadow-md" placeholder="Email"></input>
                    <input className="border border-2 border-[#CA15EB] h-10 rounded-full w-full px-4 bg-[#FFD60B] shadow shadow-md mt-6" placeholder="Full Name"></input>
                    <input className="border border-2 border-[#CA15EB] h-16 rounded-3xl w-full px-4 bg-[#FFD60B] shadow shadow-md mt-6 " placeholder="Your Message ..."></input>
                    <button className="px-10 py-1 bg-[#FFD60B] mt-6 border border-2 border-white shadow-md shadow-[#CA15EB] text-center rounded-full hover:shadow-lg font-bold">Send </button>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-[#CA15EB] text-center mb-4">Come and find us at </h1>
                    <div className="flex justify-between">
                        <h1 className="text-xl  text-[#62006D]">ESI (ex.INI)</h1>
                        <h1 className="text-xl  text-[#62006D]">Algeirs, Oued Smar, 16309</h1>
                    </div>
                    <div className="flex justify-between border-b-2 border-[#CA15EB] mt-2">
                        <h1 className="text-xl  text-[#CA15EB]">+213 773 34 52 52</h1>
                        <h1 className="text-xl  text-[#CA15EB]">cse@esi.dz</h1>
                    </div>

                    <h1 className="text-2xl font-bold text-[#62006D] mt-10 text-center">You can find us on </h1>
                    <h1 className="text-2xl font-bold text-[#62006D]  text-center">Social Media as well! </h1>
                    <div className="flex items-center justify-center">
                        <img className="mr-2" src={link} alt="Facebook max-w-20"></img>
                        <img className="mr-2" src={twi} alt="Facebook"></img>
                        <img src={link} alt="Facebook"></img>
                    </div>

                </div>
            </div>

            <div className="flex justify-center items-center bg-gray-900">
                <img className="" src={logo} alt="Logo"></img>
                <img className="" src={cse} style={{ maxWidth: 120 }} alt="CSE"></img>
            </div>


        </div>
    )
}
export default Contact;