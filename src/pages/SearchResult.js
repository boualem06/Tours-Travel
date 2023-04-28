import { useEffect, useState } from "react"
import tour from "../assets/images/tour-img07.jpg"
import Card from "../components/Card"
import Subscribe from "../components/Subscribe"
const SearchResult = () => {
    const [searchList,setSearchList]=useState([])
    useEffect(()=>{
        const searchTours=async()=>{
            let headersList = {
                "accestoken": localStorage.getItem('token')
               }
               
               let response = await fetch(`http://127.0.0.1:5000/searchTour/${localStorage.getItem('Location')}/${localStorage.getItem('Distance')}/${localStorage.getItem('Max_People')}`, { 
                 method: "GET",
                 headers: headersList
               });
               
               let data = await response.json();
               console.log(data);   
               setSearchList(data)
        }
        searchTours()
    },[])
    return (
        <div>
            <div style={{ backgroundImage: `url(${tour})`, height: "10rem" }} className="w-full bg-cover flex justify-center items-center">
                <h1 className=" text-white font-bold text-3xl">Tour Search Result</h1>
            </div>



            <div className="flex justify-center mt-12 lg:px-4 md:px-3 sm:px-2 px-1">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 sm:gap-4 gap-4">
                    {/* <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card> */}
                    {searchList.map((elem)=>{
                        return(
                            <Card tour={elem} ></Card>
                        )
                    })}
                </div>
            </div>

        <div className="mt-20 mb-0">
        <Subscribe></Subscribe>
        </div>
        


        </div>
    )
}

export default SearchResult