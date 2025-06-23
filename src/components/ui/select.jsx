import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// Root wrapper (manages open/close)
export function Select({ children }) {
  return <div className="position-relative">{children}</div>;
}

// The trigger button
export function SelectTrigger({ children, onClick, isOpen }) {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary d-flex align-items-center justify-content-between w-100"
      onClick={onClick}
    >
      {children}
      <ChevronDown size={16} className={`ms-2 transition ${isOpen ? "rotate-180" : ""}`} />
    </button>
  );
}

// (Optional) placeholder / value display
export function SelectValue({ children, className = "" }) {
  return <span className={className}>{children}</span>;
}

// Dropdown menu container
export function SelectContent({ children, isOpen }) {
  return (
    <div
      className={`dropdown-menu w-100 mt-1 ${isOpen ? "show" : ""}`}
      style={{ maxHeight: 200, overflowY: "auto" }}
    >
      {children}
    </div>
  );
}

// Individual dropdown item
export function SelectItem({ value, children, onSelect }) {
  return (
    <button
      type="button"
      className="dropdown-item"
      onClick={() => onSelect(value)}
      data-value={value}
    >
      {children}
    </button>
  );
}
