import React, { useEffect, useState } from "react";
import ChatComment from "./ChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessgae = useSelector((state) => state.chat.message);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          comment: makeRandomString(23) + "❤️",
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <div className="ml-2 p-3 border rounded-2xl border-gray-300 w-full h-[600px] overflow-y-scroll flex flex-col-reverse bg-white">
        {chatMessgae.map((message, index) => {
          return (
            <ChatComment
              key={index}
              name={message.name}
              comment={message.comment}
            />
          );
        })}
      </div>

      <form
        className="flex mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              comment: liveMessage,
            })
          );
        }}
      >
        <input
          type="text"
          placeholder="Type your message here"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          className="w-full p-3 rounded-3xl bg-gray-100"
        />
        <button className="bg-blue-500 text-white px-4 rounded-3xl">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
