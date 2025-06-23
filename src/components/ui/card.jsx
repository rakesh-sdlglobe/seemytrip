import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`card shadow-sm ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

export function CardTitle({ children }) {
  return <h5 className="card-title mb-0">{children}</h5>;
}

export function CardContent({ children }) {
  return <div className="card-body">{children}</div>;
}
