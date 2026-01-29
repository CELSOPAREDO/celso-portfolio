import React from 'react'
import { motion } from 'framer-motion'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function AppContent() {
  return (
    <motion.div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300" {...pageTransition}>
      <Header />
      <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        <section id="home" className="pt-24">
          <Hero />
        </section>
        <section id="about" className="pt-24">
          <About />
        </section>
        <section id="projects" className="pt-24">
          <Projects />
        </section>
        <section id="skills" className="pt-24">
          <Skills />
        </section>
        <section id="contact" className="pt-24 pb-12">
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  )
}

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}
