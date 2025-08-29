import React from "react";

export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const base = "px-4 py-2 font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-slate-300 hover:bg-slate-100",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300",
  };
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base",
    lg: "text-lg px-6 py-3",
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
