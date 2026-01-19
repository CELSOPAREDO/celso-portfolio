import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'CSS / Tailwind', level: 85 },
  { name: 'Framer Motion', level: 75 },
]

export default function Skills(){
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <div ref={ref} className="py-6 md:py-10">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s, i) => (
          <div key={s.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-gray-600">{s.level}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="h-2 bg-indigo-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
