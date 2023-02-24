import expe from "../assets/images/experience.png"
const Experience = () => {

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 ">
            {/* grid grid-cols-1 md:grid-cols-2 */}
            {/* flex justify-between items-center */}
            <div className="lg:mt-24">
                <h1 className="font-bold text-3xl "> With our all experience we will
                    serve you </h1>
                <p className="text-gray-500 mt-4 sm:px-4 md:px-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>


                <div className="flex justify-between items-center mt-8 lg:w-1/2 sm:px-10 md:px-10">
                    <div>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-fit px-2 py-4 bg-[#ff7e01] rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl shadow shadow-md shadow-[#ff7e01]">
                                <h1 className="text-white font-bold">+12K</h1>
                            </div>
                        </div>
                        <h1 className="text-sm text-gray-500">Successful trip</h1>
                    </div>

                    <div>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-fit px-2 py-4 bg-[#ff7e01] rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl shadow shadow-md shadow-[#ff7e01]">
                                <h1 className="text-white font-bold">+2K</h1>
                            </div>
                        </div>
                        <h1 className="text-sm text-gray-500">Regular  clients</h1>
                    </div>

                    <div>
                        <div className="flex justify-center items-center w-full">
                            <div className="w-fit px-2 py-4 bg-[#ff7e01] rounded-tr-sm rounded-bl-sm rounded-tl-xl rounded-br-xl shadow shadow-md shadow-[#ff7e01]">
                                <h1 className="text-white font-bold">+15</h1>
                            </div>
                        </div>
                        <h1 className="text-sm text-gray-500">Years Experience</h1>
                    </div>
                </div>
            </div>
            <img className="hidden md:block" src={expe} alt="experience"></img>

        </div>
    )
}

export default Experience