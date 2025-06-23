import React from "react";

export function Tabs({ children }) {
  // Wrap everything in a container
  return <div>{children}</div>;
}

export function TabsList({ children }) {
  // Bootstrap nav tabs container
  return <ul className="nav nav-tabs">{children}</ul>;
}

export function TabsTrigger({ children, active = false, onClick, ...props }) {
  // Each trigger is an <li> with a <button> (or <a>) styled via Bootstrap
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link${active ? " active" : ""}`}
        onClick={onClick}
        type="button"
        {...props}
      >
        {children}
      </button>
    </li>
  );
}

export function TabsContent({ children, active = false }) {
  // Only shows the content if active
  return (
    <div className={`tab-content${active ? " d-block" : " d-none"}`}>
      <div className="tab-pane fade show">{children}</div>
    </div>
  );
}
