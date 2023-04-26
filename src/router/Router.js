import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResult from "../pages/SearchResult";
import TourDetail from "../pages/TourDetail";
import Tours from "../pages/Tours";
import PrivateRoutes from "../components/PrivateRoutes";
const Routers = () => {
    return (
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Navigate to={'/home'}></Navigate>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/tours/search' element={<SearchResult></SearchResult>}></Route>
                <Route path='/tours/:id' element={<TourDetail></TourDetail>}></Route>
                <Route path='/tours' element={<Tours></Tours>}></Route>
            </Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
    )
}

export default Routers