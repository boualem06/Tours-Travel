import pic from "../assets/images/male-tourist.png"
const Subscribe = () => {

    return (
        <div className="flex flex-rows md:flex-cols items-center justify-between bg-blue-200 lg:px-40 md:px-14 px-4 py-2">
            <div>
                <h1 className="text-3xl font-bold text-blue-900"> Subscribe now to get more information</h1>
                <div className="flex px-1 py-2 bg-white items-center justify-between mt-10 rounded-md shadow-md">
                    <input className=" focus:outline-0" placeholder="Enter your email"></input>
                    <button className="bg-[#faa935] text-white py-1 px-1 rounded-md font-bold">Subscribe</button>
                </div>
            </div>
            <div>
                <img className="hidden sm:block" src={pic} alt='tourist'></img>
            </div>
        </div>
    )
}

export default Subscribe