import LocationOn from '@material-ui/icons/LocationOn';

import Search from '@material-ui/icons/Search';
import People from '@material-ui/icons/People';
const SearchBar = () => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3  ">


            <div className="flex items-center justify-center  border-r-2">
                <LocationOn color='secondary'></LocationOn>
                <div className=" flex-rows ml-2">
                    <h1 className='font-bold'>Location</h1>
                    <input className=" focus:outline-0" placeholder="Where are you going "></input>
                </div>
            </div>



            <div className="flex items-center justify-center  border-r-2">
                <LocationOn color='secondary'></LocationOn>
                <div className=" flex-rows  ml-2">
                    <h1 className='font-bold'>Distance</h1>
                    <input className=" focus:outline-0" placeholder="Distance km "></input>
                </div>
            </div>



            <div>
                <div className="flex items-center justify-center ">
                    <People color='secondary'></People>
                    <div className=" flex-rows ml-2">
                        <h1 className='font-bold'>Max People</h1>
                        <input type={"number"} className=" focus:outline-0" placeholder="0"></input>
                    </div>
                </div>
            </div>
            
            <div className='px-1 bg-red-500'>
                <div className='px-1 bg-[#faa935] w-fit'>
                <Search color='primary' fontSize='large'></Search>
                </div>
            
            </div>
            


        </div>
    )
}

export default SearchBar