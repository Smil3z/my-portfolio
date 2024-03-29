import React, { useState } from "react";
import Logo from "../Logo/Logo.jsx";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center px-8 h-24 max-w-[1240px] mx-auto">
      <Logo />
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[30%] h-md bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Logo />
        <ul className=" uppercase p-4 ">
          <li className="p-4 border-b border-blue-400">Home</li>
          <li className="p-4 border-b border-blue-400">About</li>
          <li className="p-4 border-b border-blue-400">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
