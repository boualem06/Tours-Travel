import Navbar from "./Navbar"
import Elect from "../pictures/Elect.png"
const Home = () => {

    return (
        <div style={{ height: "100vh", backgroundImage: `url(${Elect})` }} className="bg-cover">
            <Navbar></Navbar>
            <div style={{ height: "100vh" }} className="w-full  flex justify-center lg:justify-start items-center my-auto">
                <div className="lg:px-10 ">
                    <h1 className="text-white text-6xl lg:text-8xl text-center mb-10 font-bold ">Electro-Fest</h1>
                    <h1 className="text-white text-6xl lg:text-8xl font-bold mt-4">December 22-23-24th 2022</h1>
                    <h1 className="text-white text-6xl lg:text-8xl font-bold mt-4">9:00 AM</h1>
                    <button className="px-4 font-bold text-xl text-white mt-4 bg-[#FFD60B] py-1 rounded-full border-2 border-white md:py-4 md:px-8">Register Now</button>
                </div>

            </div>

        </div>
    )
}

export default Home;