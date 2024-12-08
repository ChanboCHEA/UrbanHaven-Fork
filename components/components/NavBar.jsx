import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex m-4 justify-between">
      <div>
        <a href="http://localhost:3001/rent">
          <IoIosArrowBack />
        </a>
      </div>

      <div className="flex gap-2">
        <a href="#" className="flex underline items-center space-x-2 ">
          {" "}
          <IoShareOutline />
          Share
        </a>

        <a href="#" className="flex underline items-center space-x-2 ">
          <FaRegHeart />
          Save
        </a>
      </div>
    </div>
  );
};

export default NavBar;
