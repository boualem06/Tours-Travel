import tour from "../assets/images/tour-img04.jpg"
import Rating from '@material-ui/lab/Rating';
import React from "react";
import LocationOn from '@material-ui/icons/LocationOn';

const TourDetail = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    return (
        <div className="lg:px-52 md:px-20 px-4">
            <div className="flex-rows sm:flex w-full ">
                <img src={tour} alt="tour" style={{ height: '36rem' }} className="md:w-2/3 lg:w-3/4 rounded-lg"></img>



                <div className="md:w-1/3 lg:w-1/4 border md:ml-4 px-8 py-4 mt-4 md:mt-0">
                    <div className="flex w-full justify-between pb-4 border-b-2 border-b-gray-100 ">
                        <h1><span className="text-lg font-bold">$99</span ><span className="text-gray-400">/per person</span></h1>
                        <Rating
                            value={value}
                            precision={0.5}
                        />
                    </div>

                    <h1 className="text-lg font-bold mt-6">information</h1>

                    <div className=" border-2 flex-rows px-6 py-10 mt-6">
                        <input className=" focus:outline-0 pb-2 border-b-2 w-full" placeholder="Full name "></input>
                        <input className=" focus:outline-0 pb-2 border-b-2 w-full mt-6" placeholder="Phone"></input>
                        <div className="flex w-full justify-between">
                            <input className=" focus:outline-0 pb-2 border-b-2 mt-6" type="date"></input>
                            <input className=" focus:outline-0 pb-2 border-b-2 w-full mt-6 ml-10" placeholder="Guest"></input>
                        </div>
                    </div>

                    <div className="flex w-full justify-between mt-4">
                        <h1>$99 x 1 person</h1>
                        <h1>$99</h1>
                    </div>

                    <div className="flex w-full justify-between mt-2">
                        <h1>Service charge</h1>
                        <h1>$10</h1>
                    </div>

                    <div className="flex w-full justify-between mt-2">
                        <h1 className="font-bold">Total</h1>
                        <h1 className="font-bold">$109</h1>
                    </div>

                    <button className="w-full text-white font-bold items-center justify-center bg-[#faa935] mt-4 rounded-full py-1 hover:shadow-lg">Book Now</button>
                </div>
            </div>

            <div className="lg:flex lg:justify-between ">
                <div className="border-2 mt-16 px-4 py-8 shadow-md ">
                    <h1 className="text-xl font-bold  mb-2">Snowy Mountains, Thailand</h1>
                    <Rating
                        value={value}
                        precision={0.5}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex ">
                            <LocationOn></LocationOn>
                            <h1 className="text-gray-400 md:ml-2 md:mr-4">Bangkok</h1>
                        </div>

                        <div className="flex ">
                            <LocationOn></LocationOn>
                            <h1 className="text-gray-400 md:ml-2 md:mr-4">$93 /per person</h1>
                        </div>

                        <div className="flex ">
                            <LocationOn></LocationOn>
                            <h1 className="text-gray-400 md:ml-2 md:mr-4">8 people</h1>
                        </div>
                    </div>

                    <h1 className="text-lg font-bold mt-8 ">Description</h1>
                    <p className="text-gray-400">this is the description</p>

                </div>


                <div className="border-2 mt-16 px-4 py-8 shadow-md lg:w-1/2 ">
                    <h1 className="text-lg font-bold  mb-3">Reviews(<span>0 reviews</span>) </h1>
                    <Rating
                        value={value}
                        precision={0.5}
                    />

                    <div className="py-3 rounded-full px-2 w-full border-2 flex justify-between lg:mt-4">
                        <input className=" focus:outline-0  w-full " placeholder="Show your thoughts..."></input>
                        <button className="bg-[#faa935] text-white font-bold px-8 py-2 rounded-full">Submit</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default TourDetail