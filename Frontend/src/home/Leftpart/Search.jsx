import React, { useState } from 'react';
import useGetAllUsers from "../../context/useGetAllUsers.jsx";
import useConversation from "../../zustand/useConversation.js";
import toast from 'react-hot-toast';
import { IoSearch } from "react-icons/io5";

function Search() {
   const [search, setSearch] = useState("");
   const [allUsers] = useGetAllUsers();
   const { setSelectedConversation } = useConversation();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return;
      const conversation = allUsers.find((user) =>
         user.fullname?.toLowerCase().includes(search.toLowerCase())
      );
      if (conversation) {
         setSelectedConversation(conversation);
         setSearch("");
      } else {
         toast.error("User not found");
      }
   };

   return (
      <div className='h-[10vh]'>
         <div className='px-6 py-4'>
            <form onSubmit={handleSubmit}>
               <div className='flex space-x-1'>
                  <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-1
                                    flex items-center gap-1 w-full">
                     <input
                        type="text"
                        className="grow outline-none bg-transparent w-full"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                     />
                  </label>

                  <button>
                     <IoSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' />
                  </button>
                  
               </div>
            </form>
         </div>
      </div>
   )
}
export default Search;



