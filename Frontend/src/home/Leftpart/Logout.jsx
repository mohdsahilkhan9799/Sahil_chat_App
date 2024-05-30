import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import toast from 'react-hot-toast';
import { FaPowerOff } from "react-icons/fa6";


function Logout() {
    const [loading, setLoading] = useState(false);
    const handleLogout = async () => {
        setLoading(true)
        try {
            const res = await axios.post("/api/user/logout")
            localStorage.removeItem("ChatApp");
            Cookies.remove("jwt");
            setLoading(false)
            toast.success("Logged out successfully")
            window.location.reload();
        } catch (error) {
            console.log("Error in Logout", error)
            toast.error("Error in Logout")
        }
    }
    return (
        <div className='h-[10vh] bg-slate-800 flex items-center absolute inset-x-0 bottom-0'>
            <div className='ml-2'>
                <FaPowerOff
             className='text-5xl text-white hover:bg-gray-600 duration-300 cursor-pointer rounded-full p-2'
                    onClick={handleLogout}
                />
            </div>
        </div>

    )
}
export default Logout;

