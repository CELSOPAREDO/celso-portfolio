import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }){
  return (
    <motion.a href={project.live} target="_blank" rel="noreferrer" className="block rounded-lg shadow overflow-hidden bg-white" whileHover={{ scale: 1.02 }}>
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded">{t}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-600 text-sm hover:underline">Code</a>
          <a href={project.live} target="_blank" rel="noreferrer" className="text-indigo-600 text-sm hover:underline">Live</a>
        </div>
      </div>
    </motion.a>
  )
}
