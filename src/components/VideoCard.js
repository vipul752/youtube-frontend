import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl overflow-hidden cursor-pointer">
      <img
        src={info.snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">
          {info.snippet.title}
        </h3>
        <p className="text-sm text-gray-500">{info.snippet.channelTitle}</p>
        <p className="text-xs text-gray-500">
          {info.statistics?.viewCount || "0"} views •{" "}
          {info.snippet.publishedAt
            ? timeSince(info.snippet.publishedAt)
            : "Unknown"}
        </p>
      </div>
    </div>
  );
};

// Helper function to format time since upload
const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};

export default VideoCard;
