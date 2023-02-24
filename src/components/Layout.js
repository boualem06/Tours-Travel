import Header from "./Header"
import Footer from "./footer"
import Routers from "../router/Router"
const Layout=()=>{
    return(
        <>
        <Header></Header>
        <div className="mt-28"></div>
        <Routers></Routers>
        {/* <div className="mb-16"></div> */}
        <Footer></Footer>
         </>
    )
}

export default Layout