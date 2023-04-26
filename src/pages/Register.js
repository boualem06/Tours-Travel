import { Link } from "react-router-dom"
import pic from "../assets/images/login.png"
import { useState } from "react"
const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name:""
    })
    const [error,setError]=useState({})
    const submit = () => {
        console.log(userInfo)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!regex.test(userInfo.email)) {
            setError({message:"invalide email"});
        }else{
        fetch('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status===400){
                    setError({message:data.message})
                }
                else{
                    setError({})
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
    return (
        <div className=' flex justify-center items-center md:h-[40rem] mb-10 md:mb-0 px-2 '>
        <div style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }} className="grid sm:grid-cols-2 grid-cols-1  rounded-lg ">
            <img className="hidden sm:block text-center" style={{ maxHeight: "30rem", maxWidth: "25rem" }} src={pic} alt="login"></img>
            <div className="bg-[#faa935] w-full text-center py-4 px-10 lg:px-14">
                <div>
                    <h1 className="text-white font-bold text-3xl">Register</h1>
                    <input onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} className="rounded-md px-2 py-1 mt-16 w-full" placeholder="your Email... "></input>
                    <input onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }} className="rounded-md px-2 py-1 mt-16 w-full" placeholder="your Name... "></input>
                    <input onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} type="password" className="rounded-md px-2 py-1 mt-10 w-full" placeholder="your password... "></input>
                </div>

                <button onClick={submit} className="bg-black text-white mt-16 w-full px-2 py-1 rounded-md font-bold hover:cursor-pointer hover:shadow-md">register</button>
                <h1 className="text-white text-sm mt-6 font-bold">Already have an account ? <Link to={"/login"}><span className="font-bold text-black hover:underline hover:cursor-pointer">login</span></Link></h1>
                {error && <h1 className="text-red-500 text-sm mt-6 font-bold">{error.message}</h1>}

            </div>
        </div>
    </div>
    )
}

export default Register


