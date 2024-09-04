import React, { useEffect } from "react";
import { useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const response = await fetch(YOUTUBE_API_KEY);
    const data = await response.json();
    setVideo(data.items);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 m-2">
        {video.map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
