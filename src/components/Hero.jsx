import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="pt-12 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-600 font-medium mb-2">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Celso Paredo — Frontend Developer</h1>
          <p className="text-gray-700 mb-6">I build accessible, fast, and delightful web experiences with React, Tailwind CSS, and Framer Motion.</p>
          <div className="flex gap-3">
            <a href="#projects" onClick={(e)=>{e.preventDefault();document.querySelector('#projects').scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition">View Projects</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault();document.querySelector('#contact').scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition">Contact Me</a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full max-w-sm mx-auto">
            <img src="Messenger_creation_BA6511BD-EFFD-4E06-BEC0-7437E9CE823E.jpeg" alt="Hero Image" className="w-full rounded shadow-md" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
