import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div>
      <div className="p-5 -lg w-48">
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Explore</li>
        </ul>
        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Explore</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
