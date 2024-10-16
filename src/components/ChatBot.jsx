import React, { useEffect } from 'react';

function ChatBot() {
  useEffect(() => {
    // Create the script tag for Tawk.to
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = 'https://embed.tawk.to/670e0d302480f5b4f58d80a3/1ia7e729q';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1); // Append the script to the body

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(s1);
    };
  }, []); // Empty dependency array ensures this runs only once

  return null; // No JSX content as this is only for adding the script
}

export default ChatBot;
