import React from "react";

export function ImageComponent({
  src,
  alt,
  className = "",
  width,
  height,
  thumbnail = false,
  roundedCircle = false,
  ...props
}) {
  // `img-fluid` makes it responsive. 
  // Optionally `img-thumbnail` or `rounded-circle` can be toggled via props.
  const classes = [
    "img-fluid",
    thumbnail && "img-thumbnail",
    roundedCircle && "rounded-circle",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={classes}
      width={width}
      height={height}
      {...props}
    />
  );
}
