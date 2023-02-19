import LocationOn from '@material-ui/icons/LocationOn';

import Search from '@material-ui/icons/Search';
import People from '@material-ui/icons/People';
const SearchBar = () => {

    return (
        // rounded-md md:rounded-full border-2 py-3 px-4 shadow-2xl mt-10 md:ml-8 mx-2 md:mx-0
        <div className="grid grid-cols-1 md:grid-cols-3  border-2 rounded-lg md:rounded-full py-2 shadow-2xl">

            <div className="flex items-center  px-2 md:border-r-2 ">
                <LocationOn color='secondary'></LocationOn>
                <div className=" flex-rows ml-2">
                    <h1 className='font-bold'>Location</h1>
                    <input className=" focus:outline-0" placeholder="Location "></input>
                </div>
            </div>


            {/* items-center md:justify-center md:border-r-2 */}
            <div className="flex items-center px-2 md:border-r-2 mt-2 md:mt-0">
                <LocationOn color='secondary'></LocationOn>

                <div className=" flex-rows  ml-2">
                    <h1 className='font-bold'>Distance</h1>
                    <input className=" focus:outline-0" placeholder="Distance km "></input>
                </div>
            </div>


            <div className="flex items-center  px-2  mt-2 md:mt-0">
                <People color='secondary'></People>

                <div className=" flex-rows  ml-2">
                    <h1 className='font-bold'>Max People</h1>
                    <input className=" focus:outline-0 w-1/2" placeholder="0"></input>
                </div>
                 <div className="flex items-center   md:mt-0 text-white bg-[#faa935]   md:py-1  md:px-4 px-1 py-1 rounded-md md:rounded-full md:hover:shadow-lg hover:cursor-pointer">
                    <Search fontSize='large'></Search>
                    <h1 className='md:hidden text-white font-bold text-lg '>Search</h1>
                </div> 
            </div>


            {/* <div className="flex items-center md:justify-center mt-2 md:mt-0 text-white bg-[#faa935] w-fit md:w-fit   md:px-4 px-1 rounded-md md:rounded-full md:hover:shadow-lg hover:cursor-pointer">
                <Search ></Search>

                <div className=" flex-rows  ml-2 ">
                    <h1 className='font-bold text-white'>Search</h1>
                </div>
            </div> */}


            {/*
            <div className='mt-4 md:mt-0'>
                <div className="flex items-center justify-center ">
                    <div className='hidden'>
                    <People color='secondary'></People>
                    </div>
                    
                    <div className=" flex-rows md:ml-2">
                        <h1 className='font-bold'>Max People</h1>
                        <input type={"number"} className=" focus:outline-0" placeholder="0"></input>
                    </div>
                    <div className='  px-1 py-1 bg-[#faa935] w-fit rounded-md text-white hidden md:block hover:shadow-md hover:cursor-pointer'>
                        <Search ></Search>
                    </div>
                </div>
            </div>

            <div className='px-1 mt-4 md:mt-0 flex  md:hidden'>
                <div className='  px-1 py-1 bg-[#faa935] w-fit rounded-md text-white hidden md:block'>
                    <Search fontSize='large'></Search>
                </div>
                <div className='flex items-center justify-between px-1 bg-[#faa935] w-fit rounded-md text-white md:hidden'>
                    <Search fontSize='large'></Search>
                    <h1 className='text-white font-bold text-lg'>Search</h1>

                </div>
            </div> */}



        </div>
    )
}

export default SearchBar