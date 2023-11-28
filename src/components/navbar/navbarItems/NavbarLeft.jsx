import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <NavLink to="/">
      <div className="text-4xl ">
        <p>
          Sho
          <span className="text-christmas-red font-ibmPlexSerif font-light ">
            PIC
          </span>
        </p>
      </div>
    </NavLink>
  );
};

export default NavbarLeft;
