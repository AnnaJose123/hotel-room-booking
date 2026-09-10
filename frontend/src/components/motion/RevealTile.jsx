import React from 'react';
import { motion } from 'framer-motion';

export default function RevealTile({ children, className = '', delay = 0 }) {
  const curtainVariants = {
    hidden: {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    },
    visible: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: 1.1,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const scaleVariants = {
    hidden: { scale: 1.14 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.4,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      variants={curtainVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      <motion.div className="w-full h-full" variants={scaleVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}
