import React from "react";

const ChatComment = ({ name, comment }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user icon"
        className="h-8 cursor-pointer"
      />
      <span className="font-bold  px-2 py-2">{name}</span>
      <span>{comment}</span>
    </div>
  );
};

export default ChatComment;
