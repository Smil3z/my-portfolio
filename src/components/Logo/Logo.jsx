import React from "react";
import logoImage from "./Smil3z_IT-Logo.png";

function Logo() {
  return (
    <div className="w-40 p-4 border-2 rounded-lg border-blue-400">
      <img src={logoImage} alt="logo" />
    </div>
  );
}

export default Logo;
