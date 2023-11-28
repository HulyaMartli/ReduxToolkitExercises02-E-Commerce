import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <NavLink to="/">
      <div className="text-4xl ">
        <p>
          Sho
          <span className="font-ibmPlexSerif font-normal text-yellow-500 ">
            PIC
          </span>
        </p>
      </div>
    </NavLink>
  );
};

export default NavbarLeft;
