import Navbar from "./Navbar"
import Elect from "../pictures/Elect.png"
const Home=()=>{

    return (
        <div style={{height:"100vh",backgroundImage: `url(${Elect})`}} className="bg-cover">
            <Navbar></Navbar>
        </div>
    )
}

export default Home ;