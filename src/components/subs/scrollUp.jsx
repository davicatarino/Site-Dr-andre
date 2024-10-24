// components/AnimatedScrollingRight.jsx
'use client'
import { motion } from 'framer-motion'
import React from 'react'

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Ajuste o valor conforme necessário para o delay
      duration: 0.3,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 },
}

const AnimatedScrollingUp = ({ children, className }) => {
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

export default AnimatedScrollingUp
