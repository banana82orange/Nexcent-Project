import React from "react";
import Headerimg from "../assets/img/header-img.png";
function Header() {
  return (
    <div className="flex flex-col md:flex-row text-center md:text-left">
      <div className="container mx-auto max-w-[1280px] md:flex md:justify-between md:items-center my-10">
        <div className="mx-4">
          <div className="text-[1rem] font-semibold">
            Branding | Image making
          </div>
          <div className="text-[5rem] font-semibold">My awesome</div>
          <div className="text-[5rem] font-semibold">portfolio</div>
          <div className="text-[1rem]">
            And I made it myself! Yes. In Figma with Anima
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="my-10 md:w-[31rem]"
            src={Headerimg}
            alt="Header Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
