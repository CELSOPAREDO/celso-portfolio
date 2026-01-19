import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'

export default function About(){
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <motion.div ref={ref} className="py-6 md:py-10">
      <motion.h2 className="text-2xl font-semibold mb-4" initial={{opacity:0, y:6}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>About Me</motion.h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=efgh" alt="profile" className="w-48 h-48 object-cover rounded-full shadow-md" />
        </div>
        <div className="md:col-span-2 text-gray-700">
          <p className="mb-4">I’m a frontend developer focused on building performant, accessible, and user-friendly interfaces. I enjoy turning design into delightful user experiences and shipping production-ready code.</p>
          <p className="mb-4">I have experience with React, TypeScript (optional), Tailwind CSS, and animation libraries like Framer Motion. I love collaborating, learning, and contributing to open-source.</p>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Experience</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>3+ years building web apps</li>
              <li>Worked on design systems and component libraries</li>
              <li>Performance and accessibility focused</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
