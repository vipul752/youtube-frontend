import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SUGGESTION_API } from "../utils/constant";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      suggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const suggestion = async () => {
    try {
      const response = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json[1]);
      setSuggestions(json[1]);
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    }
  };

  useEffect(() => {}, [searchQuery]);
  const dispatch = useDispatch();

  const toggleMenuBar = () => {
    dispatch(toggleMenu());
  };

  const goToHomePage = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center p-2 bg-white">
      <div className="flex items-center space-x-3">
        <img
          onClick={() => toggleMenuBar()}
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp"
          alt="hamburger menu"
          className="h-8 cursor-pointer"
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube logo"
          className="h-14"
          onClick={goToHomePage}
        />
      </div>
      <div className="flex px-2 space-x-1 w-2/5 relative">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="px-5 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200 focus:outline-none">
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
            alt="search icon"
            className="h-4"
          />
        </button>

        {showSuggestions && (
          <div className="absolute top-10 bg-white py-2 px-5 w-[34rem] border border-gray-300 rounded-md shadow-lg">
            <ul>
              {suggestions.map((s, index) => (
                <li key={index} className="py-2 px-2 hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
          className="h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
