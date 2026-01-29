import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <div>© {new Date().getFullYear()} Celso Paredo</div>
        <div className="flex gap-3">
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Twitter</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">GitHub</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Instagram</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">TikTok</a>
          <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
