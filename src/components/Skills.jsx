import React, { useRef, useEffect, useState } from "react";
import { profile } from "../data/profile";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  // Remove size state and effect
  return (
    <motion.div
      ref={ref}
      className="relative bg-white border border-orange-100 shadow rounded-xl px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-center mb-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      variants={item}
    >
      <img src={skill.icon} alt={skill.name} className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
      <motion.span
        className="text-orange-700 font-medium text-base sm:text-lg"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        variants={textFade}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

const Skills = () => (
  <motion.div
    className="text-center max-w-3xl mx-auto"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={container}
  >
    <motion.h2
      className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent drop-shadow"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      variants={textFade}
    >
      Skills
    </motion.h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-center">
      {profile.skills.map((skill, idx) => (
        <SkillCard skill={skill} key={idx} />
      ))}
    </div>
  </motion.div>
);

export default Skills; 