import React from "react";

const Button = ({ text }) => {
  return (
    <button className="hover:bg-christmas-green w-full rounded-xl bg-neutral-500 px-12 py-4 text-lg font-bold text-white ">
      {text}
    </button>
  );
};

export default Button;
