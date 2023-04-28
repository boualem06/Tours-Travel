import tour1 from "../assets/images/tour-img01.jpg"
// LocationOn
import LocationOn from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom"

import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';





const Card = (props) => {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
   
    return (
        <Link to={`/tours/${props.tour._id}`}>
        <div className="rounded-md border-2 border w-fit shadow-lg">
            <img style={{ height: "15rem" }} src={tour1} alt="Tour" className="rounded-md"></img>
            <div className="mt-4 px-3 pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex text-[#faa935]">
                        <LocationOn></LocationOn>
                        <h1 className="font-bold">{props.tour.address}</h1>
                    </div>
                    <div>
                        <Rating
                            value={value}
                            precision={0.5}
                        />
                    </div>
                </div>

                <h1 className="font-bold mt-2 text-lg">{props.tour.city}</h1>

                <div className=" mt-2 flex items-center justify-between w-full">
                    <h1><span className="text-[#faa935] font-bold">${props.tour.price}</span>/per person</h1>
                    <button className="px-2 bg-[#faa935] text-white py-1 rounded-md">Book Now</button>
                </div>
            </div>
        </div>

        </Link>

    )
}

export default Card