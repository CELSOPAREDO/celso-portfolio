import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const NavLink = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }}
    className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
  >
    {children}
  </a>
)

export default function Header() {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <header className="fixed w-full bg-white/60 dark:bg-gray-800/60 backdrop-blur z-30 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">Celso Paredo</div>
        <nav className="space-x-4 hidden md:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition"
            title="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <div className="md:hidden">
            <button className="p-2 rounded-md bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">Menu</button>
          </div>
        </div>
      </div>
    </header>
  )
}
