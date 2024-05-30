import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-full bg-black text-gray-300 ">
       <h1 className='px-8 py-2 text-white font-bold rounded-md mt-3 text-2xl'>Chats</h1>
      <Search />

      <div className=" flex-1  overflow-y-auto" style={{ minHeight: "calc(84vh - 10vh)" }}>
        <Users />
      </div>

      <Logout />
    </div>
  );
}

export default Left;


