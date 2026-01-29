import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, onSelect }){
  return (
    <motion.div 
      onClick={() => onSelect(project)}
      className="block rounded-lg shadow overflow-hidden bg-white cursor-pointer group" 
      whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="h-48 bg-gray-100 overflow-hidden relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click for Details</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded font-medium">{t}</span>
          ))}
        </div>
        <div className="pt-3 border-t flex items-center justify-center">
          <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            View Project Details →
          </button>
        </div>
      </div>
    </motion.div>
  )
}
