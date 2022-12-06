import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const About = () => {
    return (
        <div className="carousel w-full  flex justify-center items-center mt-10">
            <div id="slide1" className="carousel-item relative w-full lg:w-1/2 ">
                {/* <img src="https://placeimg.com/800/200/arch" className="w-full" /> */}
                <div className=' w-full border-2 border-[#CA15EB] m-2 py-4 '>
                    <h1 className='text-[#CA15EB] text-center font-bold text-4xl'>GENERAL</h1>
                    <div className=' px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        Can i participate as beginner ?
                    </div>
                    <div className='px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        whats the cost ?
                        <span className='text-sm bg-r-4'>Admission is free includes mentors,workshops,ressources,and a memorable experience</span>
                    </div>
                    <div className='px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        where is the schedule
                    </div>
                    <div className='px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        i still have question !
                    </div>
                </div>
                <div className="absolute lg:hidden flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full lg:w-1/2">
                <div className=' w-full border-2 border-[#CA15EB] m-2 py-4'>
                    <h1 className='text-[#CA15EB] text-center font-bold text-4xl'>Registration</h1>
                    <div className=' px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        what if we don't have a team
                    </div>
                    <div className='px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        Can i volunteer to judge or mentor ?
                    </div>
                    <div className='px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        How do teams work
                    </div>
                    <div className='px-14 py-2'>
                        <span className='px-1 text-center bg-[#CA15EB] text-white rounded-full mr-2 font-bold text-lg'>+</span>
                        when is the application deadline ?
                        <span className='text-sm bg-r-4'>Registration will open in early july and close on august 12 th </span>

                    </div>
                </div>              
                  <div className="absolute lg:hidden flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default About

