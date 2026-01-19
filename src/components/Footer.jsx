import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Celso Paredo</div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-indigo-600">Twitter</a>
          <a href="#" className="hover:text-indigo-600">GitHub</a>
          <a href="#" className="hover:text-indigo-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
