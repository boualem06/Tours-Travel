import Header from "./Header"
import Footer from "./footer"
import Routers from "../router/Router"
const Layout = () => {
    return (

        <div className="min-h-screen flex flex-col w-full">
            <Header></Header>
            <div className="mt-28 flex-1">
                <Routers></Routers>
            </div>

            <div className="w-full mt-auto">
                <Footer></Footer>
            </div>

        </div>
    )
}

export default Layout