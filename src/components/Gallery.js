import tour from "../assets/images/gallery-01.jpg"
import tour2 from "../assets/images/gallery-02.jpg"
import tour3 from "../assets/images/gallery-03.jpg"
import tour4 from "../assets/images/gallery-04.jpg"

import tour5 from "../assets/images/gallery-05.jpg"
import tour6 from "../assets/images/gallery-06.jpg"
import tour7 from "../assets/images/gallery-07.jpg"
const Gallery = () => {

    return (
        // grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5
        <div>
            <h1 className="font-bold text-3xl mb-6">Visit our customers tour gallery</h1>

            <div class="w-full mx-w-5xl   p-5 pb-10 mx-auto mb-10 gap-2 md:gap-5 columns-2 md:columns-3 lg:md:columns-4 space-y-2 md:space-y-2">
                <img class=" rounded-lg transition duration-500 ease-in-out transform hover:scale-110" src={tour2} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour3} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour4} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour5} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour7} alt="" />
                <img class=" rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour} alt="" />
                <img class=" rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour2} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour3} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour6} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour4} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour5} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour6} alt="" />
                <img class="rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour7} alt="" />
                <img class=" rounded-lg transition duration-500 ease-in-out transform hover:scale-110 " src={tour} alt="" />
            </div>
        </div>
    )
}

export default Gallery