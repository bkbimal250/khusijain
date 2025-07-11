import React, { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#software", label: "Software" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md border-b border-gradient-to-r from-purple-400 to-pink-300">
      <div className="max-w-5xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#a259c6] drop-shadow">Khushi Jain</h1>
          <h2 className="text-pink-400 text-xs sm:text-base font-semibold tracking-wide">Graphic Designer and Motion Artist</h2>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-4 lg:gap-6 text-[#3a2c5a] font-medium text-sm sm:text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-pink-400 transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#a259c6] mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#a259c6] mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#a259c6] transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-white/95 shadow-lg border-b border-pink-200 animate-fade-in-down">
          <ul className="flex flex-col gap-2 py-3 px-6 text-[#3a2c5a] font-medium text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-pink-400 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header; 