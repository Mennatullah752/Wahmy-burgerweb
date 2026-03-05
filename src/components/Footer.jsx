import React from "react";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-6 px-4 mt-4 -mt-4">
      {/* أيقونات السوشيال - فوق في الموبايل / يمين في الديسكتوب */}
      <div className="flex justify-center md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 space-x-4 mb-4 md:mb-0">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-blue-600 text-2xl transform transition-transform duration-300 hover:scale-125" />
        </a>
        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-500 text-2xl transform transition-transform duration-300 hover:scale-125" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-pink-500 text-2xl transform transition-transform duration-300 hover:scale-125" />
        </a>
        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="text-black text-2xl bg-white rounded-xl transform transition-transform duration-300 hover:scale-125" />
        </a>
      </div>

      {/* النص بالنص */}
      <div className="text-center text-gray-400 text-sm">
        © 2025 Wahmy Burger. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

