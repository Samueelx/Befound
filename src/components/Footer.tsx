import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <section className="bg-slate-900 flex flex-col md:flex-row md:justify-around items-center justify-evenly h-48 md:h-32 text-white">
      <div className="my-2">
        <span className="text-3xl font-bold">Befound</span>
      </div>
      <div className="my-2">
        <p className="font-extralight">
          Copyright<span>&#169;</span>Befound <span>2023</span>
        </p>
      </div>
      <div className="flex md:flex-row md:gap-8 gap-4">
        <a href="https://instagram.com/">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </div>
    </section>
  );
};

export default Footer;
