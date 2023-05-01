import { Outlet, Navigate } from "react-router-dom"
const PrivateRoutesAdmin = () => {
     let admin = false
    if(localStorage.getItem('admin')=="true") {
        admin = true;
    }
    return (
        admin ? <Outlet /> : <Navigate to={"/home"} />
    )
}

export default PrivateRoutesAdmin;