import React from "react";

const Button = ({ children, variant = "filled", className = "", ...props }) => {
  // Determine classes based on variant
  const baseClasses = "px-8 py-2 rounded-[6px] font-medium transition-colors duration-200";
  const variants = {
    filled: "bg-primary text-secondary hover:bg-yellow-400",
    hollow: "border border-primary text-secondary ",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
