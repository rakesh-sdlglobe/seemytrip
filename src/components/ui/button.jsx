export function Button({ children, className = "", variant = "primary", ...props }) {
  const baseClass = `btn btn-${variant}`;

  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
