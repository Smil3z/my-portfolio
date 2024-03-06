import React from "react";
import Logo from "../Logo/Logo.jsx";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  return (
    <div className="text-white flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#80c3d8]">REACT.</h1>
      <ul className="flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>

      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-900 bg-blue-800">
        <Logo />
        <ul className=" uppercase p-4 ">
          <li className="p-4 border-b border-black">Home</li>
          <li className="p-4 border-b border-black">About</li>
          <li className="p-4 border-b border-black">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
