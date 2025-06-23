import React from "react";

export function Badge({ children, className = "" }) {
  return (
    <span className={`badge bg-secondary text-dark ${className}`}>
      {children}
    </span>
  );
}
