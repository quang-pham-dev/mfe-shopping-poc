import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    console.log("Footer hooks work");
  }, []);

  return (
    <footer className="bg-gray-200 !h-[10vh] min-h-[10vh] flex items-center justify-center" style={{ height: '10vh' }}>
      <p className="text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} mfe-shopping-poc. All rights reserved.
        Contact to Quang Pham
      </p>
    </footer>
  );
};

export default Footer;
