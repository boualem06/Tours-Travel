const Speakers = () => {


    const card = (
        <div className="mt-2 mb-4 card w-[25%] bg-base-100 shadow-xl rounded-md mx-auto ">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='rounded-t-md' /></figure>
            <div className="card-body p-2">
                <h2 className="card-title font-semibold text-center mb-1">Speaker Name </h2>
                <p className="text-center ">Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate  scrutantes.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    )
    return (
        <div className="bg-[#000] bg-opacity-5 mt-10">
            <div>
                <h3 className="font-bold text-[35px] text-center pt-3 ">Our Speakers</h3>
            </div>
            <div className="carousel w-full  mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    {card}
                    <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {card}
                    <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    {card}
                    <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    {card}
                    <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speakers;