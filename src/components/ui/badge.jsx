import React from "react";

export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-blue-600 text-white",
    secondary: "bg-slate-200 text-slate-800",
  };
  return (
    <span className={`px-2 py-1 rounded text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
