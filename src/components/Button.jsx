import React from "react";

const Button = ({ text }) => {
  return (
    <button className="hover:bg-christmas-green rounded-full bg-gray-500 px-12 py-6 text-lg font-bold text-white ">
      {text}
    </button>
  );
};

export default Button;
