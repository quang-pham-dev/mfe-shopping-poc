import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    console.log("Footer component mounted");
  }, []);

  console.log("Footer rendering");

  return (
    <footer
      className="bg-gray-200 h-[10vh] flex items-center justify-center"
      style={{ minHeight: "10vh" }}
    >
      <p className="text-center text-xl text-gray-600 font-semibold">
        &copy; {new Date().getFullYear()} mfe-shopping-poc. All rights reserved.
        Contact to Quang Pham
      </p>
    </footer>
  );
};

export default Footer;
