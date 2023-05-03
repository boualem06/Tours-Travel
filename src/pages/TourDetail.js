import tourimg from "../assets/images/tour-img04.jpg"
import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from "react";
import LocationOn from '@material-ui/icons/LocationOn';
import { useParams } from 'react-router-dom';
import Review from "../components/review";
import { Image } from 'cloudinary-react';

const TourDetail = () => {
    const [value, setValue] = React.useState(2);
    const [tour, setTour] = useState({})
    const { id } = useParams();
    const [rating, setRating] = useState(0)
    const [reviewText, setReviewText] = useState("")
    const [reviewsList, setReviewsList] = useState([])
    const [showAll, setShowAll] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const [bookingInfo, setBookingInfo] = useState(
        {
            "productId": "",
            "username": "",
            "phone": 0,
            "date": "",
            "Guests": 0,
            "total": 0,
            title: ""
        }
    )
    useEffect(() => {
        const getTheTourDetail = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem('token')
            }

            let response = await fetch(`https://tour-travel-backend.onrender.com/getTours/${id}`, {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setTour(data)
        }

        const getTourReview = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem('token')
            }

            let response = await fetch(`https://tour-travel-backend.onrender.com/getTourReviews/${id}`, {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setReviewsList(data)

        }

        const getMe = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem('token')
            }

            let response = await fetch("https://tour-travel-backend.onrender.com/me", {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setUserInfo(data)
            console.log(data);

        }
        getMe()
        getTheTourDetail()
        getTourReview()
    }, [])

    const addReview = async () => {



        const newItem = {
            "productId": id,
            "reviewText": reviewText,
            "rating": rating,
            "username": userInfo.name,
            "updatedAt": new Date().toISOString()
        }
        setReviewsList(prevArray => [...prevArray, newItem])
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "accestoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmU2ZTM2YTY2NWE2M2NmNTg0OGY5MCIsImlhdCI6MTY4MjU4MjU4OSwiZXhwIjoxNjg1MTc0NTg5fQ.qa1NsmCDqstnEUj-hDd0F6b1AW76Yat6qG8uAcIeHlY",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "productId": id,
            "reviewText": reviewText,
            "rating": rating
        });

        let response = await fetch("https://tour-travel-backend.onrender.com/NewReview", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        console.log(data);


    }

    const submitBook = async () => {
        setBookingInfo({ ...bookingInfo, productId: id })
        setBookingInfo({ ...bookingInfo, total: tour.price * bookingInfo.Guests })
        setBookingInfo({ ...bookingInfo, title: tour.title })

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "accestoken": localStorage.getItem('token'),
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "productId": id,
            "username": "user",
            "phone": bookingInfo.phone,
            "date": bookingInfo.date,
            "Guests": bookingInfo.Guests,
            "total": tour.price * bookingInfo.Guests,
            "title": tour.title
        });

        let response = await fetch("https://tour-travel-backend.onrender.com/NewBook", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        console.log(data);


    }

    return (
        <div className="lg:px-52 md:px-20 px-4 mb-8">
            <div className="flex-rows md:flex w-full ">
                <Image style={{ height: "36rem", width: "100%" }} cloudName="dc7suzbrg" publicId={tour.photo} />
                <div className="md:w-1/3 lg:w-1/4 border md:ml-4 px-8 py-4 mt-4 md:mt-0">
                    <div className="flex w-full justify-between pb-4 border-b-2 border-b-gray-100 ">
                        <h1><span className="text-lg font-bold">${tour.price}</span ><span className="text-gray-400">/per person</span></h1>
                        <Rating
                            value={value}
                            precision={0.5}
                        />
                    </div>

                    <h1 className="text-lg font-bold mt-6">information</h1>

                    <div className=" border-2 flex-rows px-6 py-10 mt-6">
                        <input className=" focus:outline-0 pb-2 border-b-2 w-full" placeholder="Full name "></input>
                        <input onChange={(e) => { setBookingInfo({ ...bookingInfo, phone: e.target.value }) }} className=" focus:outline-0 pb-2 border-b-2 w-full mt-6" placeholder="Phone"></input>
                        <div className="flex w-full justify-between">
                            <input onChange={(e) => { setBookingInfo({ ...bookingInfo, date: `${e.target.value}` }) }} className=" focus:outline-0 pb-2 border-b-2 mt-6" type="date"></input>
                            <input onChange={(e) => { setBookingInfo({ ...bookingInfo, Guests: `${e.target.value}` }) }} className=" focus:outline-0 pb-2 border-b-2 w-full mt-6 ml-10" type="number" placeholder="Guest"></input>
                        </div>
                    </div>

                    <div className="flex w-full justify-between mt-4">
                        <h1>${tour.price} x 1 person</h1>
                        <h1>${tour.price}</h1>
                    </div>

                    <div className="flex w-full justify-between mt-2">
                        <h1>Service charge</h1>
                        <h1>$10</h1>
                    </div>

                    <div className="flex w-full justify-between mt-2">
                        <h1 className="font-bold">Total</h1>
                        <h1 className="font-bold">${tour.price + 10}</h1>
                    </div>

                    <button onClick={() => { submitBook() }} className="w-full text-white font-bold items-center justify-center bg-[#faa935] mt-4 rounded-full py-1 hover:shadow-lg">Book Now</button>
                </div>
            </div>

            <div className="lg:flex lg:items-start w-full grid gap-4">
                <div className="border-2 mt-16 px-4 py-8 shadow-md lg:w-1/2 ">
                    <h1 className="text-xl font-bold  mb-2">{tour.title} <span>,</span> {tour.address} </h1>
                    <Rating
                        value={value}
                        precision={0.5}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="flex ">
                            <LocationOn></LocationOn>
                            <h1 className="text-gray-400 md:ml-2 md:mr-4">{tour.city}</h1>
                        </div>

                        <div className="flex ">
                            <LocationOn></LocationOn>
                            <h1 className="text-gray-400 md:ml-2 md:mr-4">${tour.price} /per person</h1>
                        </div>

                        <div className="flex ">
                            <LocationOn></LocationOn>
                            <h1 className="text-gray-400 md:ml-2 md:mr-4">{tour.maxGroupSize} people</h1>
                        </div>
                    </div>

                    <h1 className="text-lg font-bold mt-8 ">Description</h1>
                    <p className="text-gray-400">{tour.desc}</p>

                </div>


                <div className="border-2 mt-16 px-4 py-8 shadow-md lg:w-1/2 ">
                    <h1 className="text-lg font-bold  mb-3">Reviews(<span>{reviewsList.length}</span>) </h1>
                    <Rating
                        onChange={(e) => { setRating(e.target.value) }}
                        value={rating}
                        precision={0.5}
                    />

                    <div className="py-3 rounded-full px-2 w-full border-2 flex justify-between lg:mt-4 mb-6">
                        <input onChange={(e) => { setReviewText(e.target.value) }} className=" focus:outline-0  w-full " placeholder="Show your thoughts..."></input>
                        <button onClick={() => { addReview() }} className="bg-[#faa935] text-white font-bold px-8 py-2 rounded-full">Submit</button>
                    </div>

                    {!showAll ? reviewsList.slice(0, 3).map((elem) => {
                        return (
                            <Review review={elem}></Review>
                        )
                    }) :
                        reviewsList.map((elem) => {
                            return (
                                <Review review={elem}></Review>
                            )
                        })
                    }

                    <div className="w-full text-center"><button onClick={() => setShowAll(!showAll)} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 font-bold rounded-md" > {!showAll ? <span>Show All</span> : <span>Show less</span>} </button> </div>

                </div>

            </div>


        </div>
    )
}

export default TourDetail