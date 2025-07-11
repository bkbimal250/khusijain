import React from "react";
import { profile } from "../data/profile";
import { motion } from "framer-motion";

const textFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Contact = () => (
  <motion.div
    className="relative text-center max-w-md sm:max-w-lg mx-auto py-8 px-2 sm:px-0"
    initial={{ opacity: 0, y: 60, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, type: 'spring' }}
  >
    <motion.h2
      className="text-3xl sm:text-4xl font-extrabold mb-8 bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] bg-clip-text text-transparent drop-shadow"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      variants={textFade}
    >
      Contact Information
    </motion.h2>
    <div className="bg-white/90 rounded-2xl shadow-xl px-6 py-8 flex flex-col gap-0 mb-8 border border-[#f3e6fa]">
      {/* Phone */}
      <div className="flex items-center gap-4 py-3">
        <img src={profile.contact.phone.icon} alt="Phone" className="w-7 h-7" />
        <span className="text-lg font-semibold text-[#a259c6] min-w-[70px] text-left">Phone:</span>
        <a href={`tel:${profile.contact.phone.value}`} className="text-gray-700 text-base hover:underline break-all">{profile.contact.phone.value}</a>
      </div>
      <div className="border-t border-[#e9d6f7] mx-2" />
      {/* Email */}
      <div className="flex items-center gap-4 py-3">
        <img src={profile.contact.email.icon} alt="Email" className="w-7 h-7" />
        <span className="text-lg font-semibold text-[#a259c6] min-w-[70px] text-left">Email:</span>
        <a href={`mailto:${profile.contact.email.value}`} className="text-gray-700 text-base hover:underline break-all">{profile.contact.email.value}</a>
      </div>
      <div className="border-t border-[#e9d6f7] mx-2" />
      {/* Address */}
      <div className="flex items-center gap-4 py-3">
        <img src={profile.contact.address.icon} alt="Address" className="w-7 h-7" />
        <span className="text-lg font-semibold text-[#a259c6] min-w-[70px] text-left">Address:</span>
        <span className="text-gray-700 text-base break-words">{profile.contact.address.value}</span>
      </div>
    </div>
    <div className="bg-white/80 rounded-xl shadow flex flex-col items-center py-5 px-4">
      <motion.span
        className="text-lg sm:text-xl font-semibold text-[#a259c6] mb-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        variants={textFade}
      >
        Languages
      </motion.span>
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
        {profile.languages.map((lang, idx) => (
          <motion.span
            key={idx}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#a18cd1]/20 to-[#fbc2eb]/20 shadow-sm"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            variants={textFade}
          >
            <img src={lang.icon} alt={lang.name} className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-700 text-xs sm:text-base font-medium">{lang.name}</span>
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Contact; 