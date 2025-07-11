import React, { useState, useEffect } from "react";
import { profile } from "../data/profile";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png"; // Add your image later

const TYPING_SPEED = 60;
const PAUSE_MS = 1200;
const DELETING_SPEED = 30;

const textFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && charIndex < profile.title.length) {
      timeout = setTimeout(() => {
        setTypedTitle(profile.title.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, TYPING_SPEED);
    } else if (!isDeleting && charIndex === profile.title.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_MS);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedTitle(profile.title.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, DELETING_SPEED);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  useEffect(() => {
    // Reset on mount
    setTypedTitle("");
    setCharIndex(0);
    setIsDeleting(false);
  }, []);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-center max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-orange-100 flex items-center justify-center shadow-md overflow-hidden"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
        <h2 className="text-base sm:text-lg md:text-xl text-orange-500 font-semibold mb-4">
          {typedTitle}
          <span className="animate-pulse">|</span>
        </h2>
        <motion.p
          className="text-gray-700 mb-2 text-sm sm:text-base md:text-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={textFade}
        >
          {profile.about}
        </motion.p>
        <motion.p
          className="text-gray-500 text-xs sm:text-sm md:text-base"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={textFade}
        >
          {profile.location}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero; 