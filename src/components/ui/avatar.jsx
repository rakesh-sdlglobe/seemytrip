import React from "react";

export function Avatar({ children }) {
  return (
    <div
      className="rounded-circle bg-secondary overflow-hidden"
      style={{ width: "40px", height: "40px" }}
    >
      {children}
    </div>
  );
}

export function AvatarImage({ src }) {
  return (
    <img
      src={src}
      alt="avatar"
      className="w-100 h-100"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
    />
  );
}

export function AvatarFallback({ children }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-secondary h-100 w-100"
      style={{ fontSize: "1rem" }}
    >
      {children}
    </div>
  );
}
