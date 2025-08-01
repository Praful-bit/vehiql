"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Camera, Search } from "lucide-react";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
   const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  const handleTextSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    // Handle search logic here
  };

  return (
    <div>
      <form onSubmit={handleTextSearch}>
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-5 h-5" />
          <Input
            type="text"
            placeholder="Enter make, model, or use our AI Image Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          />
          <div>
            <Camera size={35}
            onClick={()=>setIsImageSearchActive(!isImageSearchActive)}
            className="cursor-pointer rounded-xl p-1.5"
            style={{
              background:isImageSearchActive ? "black":"",
              color: isImageSearchActive ? "white" : "",
            }}
            />
          </div>
          </div>
      </form>
    </div>
  );
};

export default HomeSearch;
