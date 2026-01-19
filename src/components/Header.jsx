import React from 'react'

const NavLink = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
    }}
    className="text-sm md:text-base text-gray-700 hover:text-indigo-600 transition"
  >
    {children}
  </a>
)

export default function Header() {
  return (
    <header className="fixed w-full bg-white/60 backdrop-blur z-30 border-b">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-semibold text-indigo-600">Celso Paredo</div>
        <nav className="space-x-4 hidden md:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <button className="p-2 rounded-md bg-indigo-50 text-indigo-600">Menu</button>
        </div>
      </div>
    </header>
  )
}
