import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`bg-white border shadow-sm p-4 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`${className}`}>{children}</div>;
}
