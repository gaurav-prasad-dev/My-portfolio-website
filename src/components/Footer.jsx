import React from "react";

function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm bg-white">
      © {new Date().getFullYear()} Gaurav Kumar. All Rights Reserved
    </footer>
  );
}

export default Footer;