import React from "react";

const Footer = () => {
  return (
   <footer className="bg-black py-8 mt-12 rounded-t-2xl text-center text-white">
  <div className="max-w-7xl mx-auto px-6">
    <p className="mb-2 text-white">
      Email:{" "}
      <a
        href="mailto:vishnusiddamsetti@gmail.com"
        className="text-blue-400 hover:underline"
      >
        vishnusiddamsetti@gmail.com
      </a>
    </p>
    <p className="mb-2 text-white">
      Phone:{" "}
      <a href="tel:+12" className="text-blue-400 hover:underline">
        +91 7661020200
      </a>
    </p>
    <p className="text-sm mt-6 text-gray-400">
      © {new Date().getFullYear()} Vishnu Siddamsetti. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;
