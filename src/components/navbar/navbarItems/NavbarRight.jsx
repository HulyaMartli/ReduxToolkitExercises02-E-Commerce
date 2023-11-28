import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBasket } from "react-icons/bs";

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="hover:text-christmas-red hover:border-christmas-red flex items-center rounded-full border bg-gray-100 px-6 py-3">
        <input
          type="search"
          placeholder="Search..."
          className=" bg-gray-100 outline-none"
        />
        <CiSearch size={28} className="cursor-pointer" />
      </div>
      <CiHeart size={28} className="hover:text-christmas-red cursor-pointer" />
      <div className="relative cursor-pointer">
        <p className="bg-christmas-red absolute -right-1 top-2 flex h-5 w-5 items-center justify-center rounded-full p-2 text-xs text-white">
          3
        </p>
        <BsBasket size={30} />
      </div>
    </div>
  );
};

export default NavbarRight;
