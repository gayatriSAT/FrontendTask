import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-4 border border-gray-900 text-gray-900 text-sm font-normal font-NunitoSans rounded-full hover:bg-gray-100 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
