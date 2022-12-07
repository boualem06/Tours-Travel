import About from "./About";
import men from "../pictures/men.jpg"
const Speakers = () => {


    const card = (
        // <div className=" card  bg-base-100 shadow-xl rounded-md mr-4 w-ful">
        //     <figure><img src={men} alt="Shoes" className='rounded-t-md w-full' /></figure>
        //     <div className="card-body p-2">
        //         <h2 className="card-title font-semibold text-center mb-1">Speaker Name </h2>
        //         <p className="text-center ">Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis</p>
        //         <div className="card-actions justify-end">
        //         </div>
        //     </div>
        // </div>

        <div className="border border-[#CA15EB] border-4 shadow-lg shadow-[#CA15EB] rounded-lg shadow-xl  px-4 py-6 bg-gray-[900] mr-20 lg:mr-40">
            <div className='flex justify-between'>
                <h1 className='font-bold text-2xl '>Speaker Name</h1>
            </div>
            <div className='flex   flex-col mt-10'>
                <div className='flex items-center justify-center'>
                    <img style={{ maxWidth: 240 }} src={men} alt="Car"></img>
                </div>
            </div>

            <div className='w-full flex justify-between items-center mt-6'>
                <p className="text-center">Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis</p>

            </div>
        </div>
    )
    return (
        
        <div style={{ display: "grid", gridAutoFlow: "column", overflowX: "auto" }} className="w-full mt-8 speakers">
            
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}
            {card}


        </div>



        // <div className="bg-gray-900 bg-opacity-5 mt-24">
        //     <div>
        //         <h3 className="font-bold text-[35px] text-center pt-3 ">Our Speakers</h3>
        //     </div>
        //     <div className="carousel w-full  mt-5">
        //         <div id="slide1" className="carousel-item relative w-full">
        //             {card}
        //             <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide4" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             {card}
        //             <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full ">
        //             {card}
        //             <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide4" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide4" className="carousel-item relative w-full">
        //             {card}
        //             <div className="absolute flex justify-around transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Speakers;