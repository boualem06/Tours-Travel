import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const About = () => {
    return (
        <div className=" w-full  grid grid-cols-1 md:grid-cols-2 gap-4  mt-24 px-2 py-4">

            <div className='  border-2 border-[#CA15EB] py-4 shadow-md shadow-[#CA15EB]'>
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


            <div className='  border-2 border-[#CA15EB] py-4 mt-4 md:mt-0 shadow-md shadow-[#CA15EB]'>
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


        </div>
    );
};

export default About

