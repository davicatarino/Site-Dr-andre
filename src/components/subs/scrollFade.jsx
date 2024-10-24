// components/AnimatedScrollingFade.jsx
'use client'
import React from 'react'
import { motion } from 'framer-motion'

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const AnimatedScrollingFade = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={staggerItem}>{child}</motion.div>
      ))}
    </motion.div>
  )
}

export default AnimatedScrollingFade
