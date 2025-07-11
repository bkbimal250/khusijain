import React, { useRef, useEffect, useState } from "react";
import { profile } from "../data/profile";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};
const textFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ExperienceCard = ({ exp }) => {
  const ref = useRef(null);
  // Remove size state and effect
  return (
    <motion.div
      ref={ref}
      className="relative bg-white border border-orange-100 shadow rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start mb-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      variants={item}
    >
      <img src={exp.icon} alt={exp.title} className="w-10 h-10 sm:w-12 sm:h-12 mt-1" />
      <div>
        <motion.h3
          className="text-base sm:text-lg font-semibold text-gray-800 mb-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={textFade}
        >
          {exp.title}{exp.company ? ` @ ${exp.company}` : ""}
        </motion.h3>
        <span className="text-orange-500 font-medium text-xs sm:text-sm">{exp.period}</span>
        <motion.p
          className="text-gray-700 mt-2 text-sm sm:text-base"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          variants={textFade}
        >
          {exp.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <motion.div
    className="max-w-2xl mx-auto"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={container}
  >
    <motion.h2
      className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent drop-shadow"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      variants={textFade}
    >
      Work Experience
    </motion.h2>
    <div className="flex flex-col gap-4 sm:gap-6">
      {profile.experience.map((exp, idx) => (
        <ExperienceCard exp={exp} key={idx} />
      ))}
    </div>
  </motion.div>
);

export default Experience; 