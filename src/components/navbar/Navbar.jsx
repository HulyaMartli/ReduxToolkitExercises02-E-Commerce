import React from "react";
import NavbarLeft from "./navbarItems/NavbarLeft";
import NavbarRight from "./navbarItems/NavbarRight";

const Navbar = () => {
  return (
    <div className="my-5 flex items-center justify-between">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
