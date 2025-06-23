export function Separator({ color = "secondary", className = "" }) {
  // e.g. color="dark" or "primary", which applies `border-top border-[color]`
  return (
    <hr
      className={`
        my-4 
        border-top 
        border-${color} 
        ${className}
      `}
    />
  );
}
