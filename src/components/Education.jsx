import React, { useRef, useEffect, useState } from "react";
import { profile } from "../data/profile";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
const textFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const EducationCard = ({ edu }) => {
  const ref = useRef(null);
  // Remove size state and effect
  return (
    <motion.div
      ref={ref}
      className="relative bg-white/70 backdrop-blur-lg border-4 border-transparent bg-clip-padding rounded-2xl p-5 sm:p-7 shadow-xl flex items-center gap-3 sm:gap-5 text-left mb-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      style={{ borderImage: 'linear-gradient(120deg, #a18cd1, #fbc2eb) 1' }}
      variants={item}
    >
      <img src={edu.icon} alt={edu.degree} className="w-10 h-10 sm:w-14 sm:h-14" />
      <div>
        <motion.strong
          className="text-[#a259c6] text-base sm:text-lg font-semibold"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={textFade}
        >
          {edu.degree}
        </motion.strong>
        <br />
        <motion.span
          className="text-gray-700 text-sm sm:text-base"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={textFade}
        >
          {edu.institution}
        </motion.span>
      </div>
    </motion.div>
  );
};

const Education = () => (
  <motion.div
    className="text-center max-w-3xl mx-auto"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={container}
  >
    <motion.h2
      className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent drop-shadow"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      variants={textFade}
    >
      Education
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
      {profile.education.map((edu, idx) => (
        <EducationCard edu={edu} key={idx} />
      ))}
    </div>
  </motion.div>
);

export default Education; 