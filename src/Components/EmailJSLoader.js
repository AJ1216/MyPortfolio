import { useEffect } from 'react';

const EmailJSLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS after the script is loaded
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;
      if (window.emailjs && userId) {
        window.emailjs.init(userId); // Use your environment variable
      } else {
        console.error('EmailJS script loaded, but user ID is missing.');
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script when component unmounts
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default EmailJSLoader;
