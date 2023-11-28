import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBasket } from "react-icons/bs";

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center rounded-full border bg-neutral-100 px-6 py-3 hover:border-yellow-500 hover:text-yellow-500">
        <input
          type="search"
          placeholder="Search..."
          className=" bg-neutral-100 outline-none"
        />
        <CiSearch size={28} className="cursor-pointer" />
      </div>
      <CiHeart size={40} className="cursor-pointer hover:text-yellow-500" />
      <div className="relative cursor-pointer">
        <p className="absolute -right-1 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 p-2 text-xs text-white">
          3
        </p>
        <BsBasket size={30} />
      </div>
    </div>
  );
};

export default NavbarRight;
