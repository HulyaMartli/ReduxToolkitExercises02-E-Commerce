import React from "react";

const Button = ({ text }) => {
  return (
    <button className="hover:bg-christmas-red  rounded-full bg-gray-100 px-12 py-6 text-lg font-bold  hover:text-white">
      {text}
    </button>
  );
};

export default Button;
