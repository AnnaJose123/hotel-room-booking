import React from 'react';
import { motion } from 'framer-motion';

export default function SplitReveal({
  children,
  className = '',
  as = 'h2',
  delay = 0,
  stagger = 0.05
}) {
  const text = typeof children === 'string' ? children : '';
  const words = text ? text.split(' ') : [];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: '120%',
      opacity: 0,
      rotateX: 20,
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const Tag = motion[as] || motion.h2;

  if (!text) {
    return (
      <Tag className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={`inline-flex flex-wrap gap-x-[0.3em] overflow-hidden py-1 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden pb-1">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
