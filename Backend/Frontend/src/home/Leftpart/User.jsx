import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

function User({user}) {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const isSelected = selectedConversation?._id===user._id;

  const {socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id)

  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-700":""}`} 
    onClick={() => setSelectedConversation(user)}>
      <div className='flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
                <div className={`avatar ${isOnline?"online":""}`}>
                    <div className="w-14 rounded-full">
                         <img src="https://img.freepik.com/premium-photo/3d-illustration-cartoon-character-avatar-profile_1183071-193.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className='font-sans mt-3 text-lg'>{user.fullname}</h1>
                    {/* <span>{user.email}</span> */}
                </div>
            </div>
    </div>
  )
}
export default User;




