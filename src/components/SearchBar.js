import LocationOn from '@material-ui/icons/LocationOn';
import { useState } from 'react';
import Search from '@material-ui/icons/Search';
import People from '@material-ui/icons/People';
import { Navigate } from "react-router-dom"

const SearchBar = () => {
    const [searchInfo,setSearchInfo]=useState({
        Location:"",
        Distance:200,
        Max_People:5
    })

    const [isSubmit,setIsSubmit]=useState(false)

    const searchData=()=>{
        console.log(searchInfo)
        localStorage.setItem('Location',searchInfo.Location)
        localStorage.setItem('Distance',searchInfo.Distance)
        localStorage.setItem('Max_People',searchInfo.Max_People)
        setIsSubmit(true)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  border-2 rounded-lg md:rounded-full py-2 shadow-xl">

            <div className="flex items-center  px-2 md:border-r-2 ">
                <LocationOn color='secondary'></LocationOn>
                <div className=" flex-rows ml-2">
                    <h1 className='font-bold'>Location</h1>
                    <input onChange={(e)=>{setSearchInfo({...searchInfo,Location:e.target.value})}} className=" focus:outline-0" placeholder="Location "></input>
                </div>
            </div>


            <div className="flex items-center px-2 md:border-r-2 mt-2 md:mt-0">
                <LocationOn color='secondary'></LocationOn>

                <div className=" flex-rows  ml-2">
                    <h1 className='font-bold'>Distance</h1>
                    <input onChange={(e)=>{setSearchInfo({...searchInfo,Distance:e.target.value})}} className=" focus:outline-0" placeholder="Distance km "></input>
                </div>
            </div>


            <div className="flex items-center  px-2  mt-2 md:mt-0">
                <People color='secondary'></People>

                <div className=" flex-rows  ml-2">
                    <h1 className='font-bold'>Max People</h1>
                    <input onChange={(e)=>{setSearchInfo({...searchInfo,Max_People:e.target.value})}} className=" focus:outline-0 w-1/2" placeholder="0"></input>
                </div>
                 <div onClick={()=>{searchData()}} className="flex items-center   md:mt-0 text-white bg-[#faa935]   md:py-1  md:px-4 px-1 py-1 rounded-md md:rounded-full md:hover:shadow-lg hover:cursor-pointer">
                    <Search fontSize='large'></Search>
                    <h1 className='md:hidden text-white font-bold text-lg '>Search {isSubmit && <Navigate to={"/tours/search"}></Navigate>}</h1>
                </div> 
            </div>

            

        </div>
    )
}

export default SearchBar