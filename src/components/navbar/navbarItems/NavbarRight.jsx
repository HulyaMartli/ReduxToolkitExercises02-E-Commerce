import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBasket } from "react-icons/bs";

const NavbarRight = () => {
  return (
    <div className="flex items-center gap-8">
      <div className="hover:border-nino-red-base hover:text-nino-red-base flex items-center rounded-full border bg-neutral-100 px-6 py-3">
        <input
          type="search"
          placeholder="Search..."
          className=" bg-neutral-100 outline-none"
        />
        <CiSearch size={28} className="cursor-pointer" />
      </div>
      <CiHeart size={35} className="hover:text-nino-red-base cursor-pointer" />
      <div className="relative cursor-pointer">
        <span className="bg-nino-red-base absolute -right-1 top-2 flex h-6 w-6 items-center justify-center rounded-full p-2 text-sm font-normal text-white">
          3
        </span>
        <BsBasket size={35} />
      </div>
    </div>
  );
};

export default NavbarRight;
