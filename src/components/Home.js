import Navbar from "./Navbar"
import Elect from "../pictures/Elect.png"
const Home = () => {

    return (
        <div style={{ height: "100vh", backgroundImage: `url(${Elect})` }} className="bg-cover">
            <Navbar></Navbar>
            <div style={{ height: "100vh" }} className="w-full  flex justify-center lg:justify-start items-center my-auto">
                <div className="lg:px-10 ">
                    <h1 className="text-white text-6xl lg:text-8xl text-center mb-10 font-bold ">Electro-Fest</h1>
                    <h1 className="text-white text-6xl lg:text-8xl font-bold ">MM/DD-MM/DD</h1>
                </div>

            </div>

        </div>
    )
}

export default Home;