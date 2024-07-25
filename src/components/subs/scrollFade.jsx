// components/AnimatedScrollingRight.jsx
'use client'
import { motion } from 'framer-motion'
import React from 'react'

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Ajuste o valor conforme necessário para o delay
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
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={staggerItem}>{child}</motion.div>
      ))}
    </motion.div>
  )
}

export default AnimatedScrollingFade
