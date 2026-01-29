import React from 'react'
import { motion } from 'framer-motion'
import useInView from '../hooks/useInView'
import profileImage from '../../celso.jpeg'

export default function About(){
  const [ref, inView] = useInView({ threshold: 0.15 })

  const stats = [
    { label: '3+', value: 'Years Experience' },
    { label: '15+', value: 'Projects Completed' },
    { label: '100%', value: 'Client Satisfaction' }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Webpack'] },
    { category: 'Specialties', items: ['Performance', 'Accessibility', 'UI/UX', 'Responsive Design'] }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.section ref={ref} className="py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">About Me</h2>
        <div className="w-16 h-1 bg-blue-600 mb-8"></div>
      </motion.div>

      {/* Main About Section */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Profile Image */}
        <motion.div 
          className="flex justify-center order-2 lg:order-1"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 blur opacity-20"></div>
            <img 
              src={profileImage} 
              alt="Celso Paredo" 
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div className="order-1 lg:order-2 space-y-6" variants={itemVariants}>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Frontend Developer</span> with a keen eye for creating exceptional digital experiences. Specializing in building performant, accessible, and visually stunning interfaces that users love.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in web development has been driven by a commitment to excellence, continuous learning, and a deep understanding of user-centered design principles. I thrive in collaborative environments and take pride in delivering production-ready code.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
              >
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h3 className="text-2xl font-bold mb-8 dark:text-white">Skills & Expertise</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-indigo-50 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-shadow"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">{skillGroup.category}</h4>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Highlights */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 text-white rounded-xl p-8 md:p-12"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h3 className="text-2xl font-bold mb-6">What I'm Looking For</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <span className="text-2xl mr-4">✓</span>
            <span>Challenging projects that push boundaries and innovation</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">✓</span>
            <span>Collaborative teams with a passion for excellence</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">✓</span>
            <span>Opportunities to contribute to open-source projects</span>
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-4">✓</span>
            <span>Continuous learning and professional growth</span>
          </li>
        </ul>
      </motion.div>
    </motion.section>
  )
}
