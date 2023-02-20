import weather from "../assets/images/weather.png"
import customization from "../assets/images/customization.png"
import guide from "../assets/images/guide.png"
// import weather from "../assets/images/weather.png"
const Offers = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            <div className="flex-rows items-center justify-center">
                <h1 className="section__subtitle__two ">What we serve </h1>
                <h1 className="text-2xl font-bold">We Offer Our Best Services </h1>
            </div>
            <div className=" shadow-md shadow-[#faa935]  rounded-md px-2 py-2 lg:px-4 lg:py-4 border-2  border-[#faa935]">
                <div className="bg-[#faa935] ff7e01 w-fit  px-2 py-2 rounded-full">
                    <img style={{ width: "2.3rem", height: "2.3rem" }} src={weather} alt="weather"></img>
                </div>
                <h1 className="font-bold text-md mt-2 lg:mt-6">Calculate weather</h1>
                <h2 className="text-sm text-gray-500 lg:mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>

            </div>

            <div className=" shadow-md shadow-[#faa935]  rounded-md px-2 py-2 lg:px-4 lg:py-4 border-2  border-[#faa935]">
                <div className="bg-[#faa935] ff7e01 w-fit faa935 px-2 py-2 rounded-full">
                    <img style={{ width: "2.3rem", height: "2.3rem" }} src={guide} alt="weather"></img>
                </div>
                <h1 className="font-bold text-md mt-2 lg:mt-6">Best Tour guide </h1>
                <h2 className="text-sm text-gray-500 lg:mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>

            </div>

            <div className=" shadow-md shadow-[#faa935]  rounded-md px-2 py-2 lg:px-4 lg:py-4 border-2  border-[#faa935]">
                <div className="bg-[#faa935] ff7e01 w-fit faa935 px-2 py-2 rounded-full">
                    <img style={{ width: "2.3rem", height: "2.3rem" }} src={customization} alt="weather"></img>
                </div>
                <h1 className="font-bold text-md mt-2 lg:mt-6">Customization</h1>
                <h2 className="text-sm text-gray-500 lg:mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>

            </div>
        </div>
    )
}

export default Offers;