import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenAccent({ text = "Sanctuary of quiet stillness", className = '' }) {
  const underlineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <div className={`inline-relative inline-block ${className}`}>
      <span className="font-script text-2xl sm:text-3xl md:text-4xl text-[#9C7A50] font-normal leading-none">
        {text}
      </span>
      <svg
        className="w-full h-3 overflow-visible text-[#9C7A50] mt-0.5"
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 4 8 C 50 2, 150 14, 196 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={underlineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
}
