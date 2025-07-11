import React from "react";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/khushi-jain-graphic-motion/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yourprofile/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
  },
  {
    name: "Email",
    url: "mailto:4909khushi@gmail.com",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg",
  },
];

const Footer = () => (
  <footer className="w-full mt-8 sm:mt-12">
    <div className="max-w-xs sm:max-w-3xl mx-auto px-2 sm:px-4 py-4 sm:py-6 rounded-t-2xl bg-white/60 backdrop-blur-lg shadow-lg border-t-4 border-transparent bg-clip-padding flex flex-col items-center"
      style={{ borderImage: 'linear-gradient(90deg, #a18cd1, #fbc2eb) 1' }}>
      <div className="flex gap-4 sm:gap-6 mb-2">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            title={s.name}
          >
            <img src={s.icon} alt={s.name} className="w-6 h-6 sm:w-7 sm:h-7 opacity-80 hover:opacity-100" />
          </a>
        ))}
      </div>
      <div className="text-xs sm:text-sm text-[#7c6a9c] font-medium text-center">
        &copy; {new Date().getFullYear()} Khushi Jain. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 