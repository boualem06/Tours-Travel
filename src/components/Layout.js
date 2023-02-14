import Header from "./Header"
import Footer from "./footer"
import Routers from "../router/Router"
const Layout=()=>{
    return(
        <>
        <Header></Header>
        <div className="mt-28"></div>
        <Routers></Routers>
        <Footer></Footer>
         </>
    )
}

export default Layout