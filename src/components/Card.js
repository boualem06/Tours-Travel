import tour1 from "../assets/images/tour-img01.jpg"
// LocationOn
import LocationOn from '@material-ui/icons/LocationOn';

import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

// const useStyles = makeStyles({
//   root: {
//     width: 200,
//     display: 'flex',
//     alignItems: 'center',
//   },
// });


const Card = () => {

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    // const classes = useStyles();

    return (
        <div className="rounded-md border-2 border w-fit shadow-lg">
            <img style={{ height: "15rem" }} src={tour1} alt="Tour" className="rounded-md"></img>
            <div className="mt-4 px-3 pb-3">
                <div className="flex items-center justify-between">
                    <div className="flex text-[#faa935]">
                        <LocationOn></LocationOn>
                        <h1 className="font-bold">London</h1>
                    </div>
                    <div>
                        <Rating
                            value={value}
                            precision={0.5}
                        />
                    </div>
                </div>

                <h1 className="font-bold mt-2 text-lg">Washington Bridge</h1>

                <div className=" mt-2 flex items-center justify-between w-full">
                    <h1><span className="text-[#faa935] font-bold">$99</span>/per person</h1>
                    <button className="px-2 bg-[#faa935] text-white py-1 rounded-md">Book Now</button>
                </div>
            </div>
        </div>




        // <div className={classes.root}>


        //   </div>
    )
}

export default Card