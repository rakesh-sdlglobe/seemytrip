import React from 'react'
import DOMPurify from 'dompurify'

export function HotelDescription({ description }) {
  // Fallback text if no description is provided
  const fallback =
    'This luxurious beachfront hotel offers a perfect blend of comfort and elegance. ' +
    'Enjoy stunning sea views, world-class amenities, and exceptional service.'

  // Use the raw HTML from props, or fall back
  const html = description && description.trim() !== '' ? description : fallback

  // Sanitize the HTML to remove any unsafe scripts or tags
  const cleanHtml = DOMPurify.sanitize(html)

  return (
    <div
      className="hotel-description"
      /* 
        Danger! This is how React lets you inject real HTML.
        We’re sanitizing above, so it’s safe.
      */
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  )
}
