

import React from "react";
import { motion } from "framer-motion";

function ScrollReveal({ children, delay = 0, direction = "up" }) {
  const variants = {
    up: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  };
  const v = variants[direction] || variants.up;
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
