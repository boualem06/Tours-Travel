import { NavLink, Link } from "react-router-dom"
import logo from '../assets/images/logo.png'

import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Admin from "../pages/Admin";
const Navbar = () => {
    const nav_links = [
        {
            path: '/home',
            display: 'Home'
        },
        {
            path: '/tours',
            display: 'Tours'
        },
    ]
    let [open, setOpen] = useState(false);
    return (
        <div className=' shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

                <div className='font-bold text-2xl cursor-pointer flex items-center  '>
                    <img style={{ maxHeight: "55px" }} src={logo} alt=""></img>
                </div>



                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <button className=''>{open ? <MdOutlineClose></MdOutlineClose> : <MdMenu></MdMenu>}</button>
                </div>


                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        nav_links.map((item, index) => (
                            <li className="nav__item mr-16 items-center hover:underline text-[#0b2727] font-bold text-md" key={index}>
                                <NavLink to={item.path}>{item.display}</NavLink>
                            </li>

                        ))
                    }
                    {localStorage.getItem('admin')=="true" && <li className="nav__item mr-16 items-center hover:underline text-[#0b2727] font-bold text-md" >
                        <NavLink to={"/admin"}>{"Admin"}</NavLink>
                    </li>}
                    <div className="flex items-center  ">
                        {!localStorage.getItem('token') ?
                            <div className="flex items-center  ">
                                <button className="btn secondary__btn mr-4"><Link to={'/login'}>Login</Link></button>
                                <button className="btn primary__btn mr-4"><Link to={'/register'}>Register</Link></button>
                            </div> :
                            <div className="flex items-center  ">
                                <button onClick={()=>{localStorage.removeItem('token');localStorage.removeItem('admin'); window.location.reload()}} className="btn primary__btn mr-4">Logout</button>
                            </div>

                        }

                    </div>
                </ul>


            </div>
        </div>
    )
}

export default Navbar;