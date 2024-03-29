import { useEffect, useState } from "react";
import Card from "../components/Card"
const FeaturedTours = () => {
    const [featuredTours, setFeaturedTours] = useState([])

    useEffect(() => {
        const fetchingFeaturedTours = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem("token")
            }

            let response = await fetch("https://tour-travel-backend.onrender.com/getFeaturedTours", {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setFeaturedTours(data.toursArray)
        }

        fetchingFeaturedTours()

    }, [])



    return (
        <div>
            <h1 className="font-bold text-3xl ">Our Featured Tours</h1>
            <div className="flex justify-center mt-4 lg:px-4 md:px-3 sm:px-2 px-1">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 sm:gap-4 gap-4">
                    {featuredTours.map((elem) => {
                        return (<Card tour={elem} ></Card>)
                    }
                    )}

                </div>
            </div>
        </div>

    )
}

export default FeaturedTours