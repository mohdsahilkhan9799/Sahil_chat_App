import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap items-center space-x-0 h-[10vh]  bg-gray-600"> 
        <div className=" w-[70%] mx-4">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-700 rounded-xl outline-none mt-2 px-4 py-3 w-full"
          />
        </div>

        <button type="submit" className="flex items-center justify-center duration-200 p-3 rounded-full hover:bg-gray-500">
          <IoSend className="text-3xl text-white" />
        </button>

      </div>

    </form>
  );
}

export default Typesend;



