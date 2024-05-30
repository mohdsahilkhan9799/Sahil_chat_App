import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { FiMenu } from "react-icons/fi";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-gray-700 hover:bg-gray-600 
     duration-300 rounded-none">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <FiMenu className="text-white text-4xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] duration-300">

        <div className="avatar">
          <div className="w-12 rounded-full">
          <img src="https://img.freepik.com/premium-photo/3d-illustration-cartoon-character-avatar-profile_1183071-193.jpg"alt="User Avatar" />
          </div>
        </div>

        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>

  );
}

export default Chatuser;


