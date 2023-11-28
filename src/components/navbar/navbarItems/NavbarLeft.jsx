import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLeft = () => {
  return (
    <div className="flex items-center justify-between gap-10">
      <NavLink to="/">
        <div className="text-4xl font-light">
          <p>
            Shop
            <span className="font-ibmPlexSerif text-nino-red-base font-normal ">
              Nino
            </span>
          </p>
        </div>
      </NavLink>
      <ul className="flex items-center justify-between gap-6 text-lg font-light">
        <li className="hover:text-nino-red-base ">About</li>
        <li className="hover:text-nino-red-base ">Collections</li>
        <li className="hover:text-nino-red-base ">Gallery</li>
        <li className="hover:text-nino-red-base ">Murals</li>
        <li className="hover:text-nino-red-base ">Print</li>
      </ul>
    </div>
  );
};

export default NavbarLeft;
