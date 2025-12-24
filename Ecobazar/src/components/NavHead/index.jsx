import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const NavHead = () => {
  return (
    <div className="py-3 flex justify-between text-gray-600">
      <div className="flex items-center gap-2">
        <CiLocationOn className="text-xl" />
        <p className="text-sm">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-1.5 cursor-pointer">
            <span>Eng</span>
            <IoIosArrowDown />
        </div>
        <div className="flex items-center gap-1.5 cursor-pointer">
            <span>USD</span>
            <IoIosArrowDown />
        </div>
        <div className="w-px bg-gray-200"></div>
        <div className="flex items-center gap-1">
            <span className="cursor-pointer">Sign In</span>
            <span>/</span>
            <span className="cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default NavHead;
