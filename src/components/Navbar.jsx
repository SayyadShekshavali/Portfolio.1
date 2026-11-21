import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faIdCardClip,
  faFolderOpen,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const links = [
    { label: "Home", href: "#home", icon: faHouse },
    { label: "About", href: "#about", icon: faIdCardClip },
    { label: "Projects", href: "#projects", icon: faFolderOpen },
    { label: "Contact", href: "#contact", icon: faPaperPlane },
  ];

  return (
    <nav className="w-full h-25 px-6 sm:px-10 lg:px-16 py-5 bg-transparent">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-semibold italic text-black bg-white"
        >
          Sayyad<span className="text-purple-400">.</span>
        </a>

        <div className="flex items-center gap-4 sm:gap-8 bg-transparent px-6 py-3 rounded-full shadow-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl flex items-center gap-2 text-sm font-medium text-white/80 hover:text-purple-400 transition-colors bg-transparent blur-1xl rounded-4xl px-2 py-2"
            >
              {link.label}
              <FontAwesomeIcon icon={link.icon} className="text-white-500 " />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
