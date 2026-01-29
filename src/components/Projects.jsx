import React, { useState } from 'react'
import ProjectCard from './ProjectCard'

const sampleProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A responsive web app with modern UI and animations.',
    fullDescription: 'A responsive web app with modern UI and animations. Built with cutting-edge React practices, featuring smooth transitions and interactive components that enhance user engagement. Fully mobile-optimized with Tailwind CSS for styling and Framer Motion for delightful micro-interactions. This project demonstrates best practices in component design, state management, and performance optimization.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    features: ['Responsive Design', 'Smooth Animations', 'Interactive Components', 'Mobile Optimized'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce frontend with optimized performance.',
    fullDescription: 'An e-commerce frontend with optimized performance and seamless checkout flow. Integrated with Stripe for secure payments, utilizing Vite for lightning-fast build times and development experience. Features product filtering, cart management, and real-time inventory updates. Built with accessibility in mind and fully responsive across all device sizes.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=mnop',
    tech: ['React', 'Vite', 'Stripe'],
    features: ['Product Filtering', 'Secure Payments', 'Cart Management', 'Real-time Updates'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Design system and component library.',
    fullDescription: 'Comprehensive design system and reusable component library built with React. Documented extensively with Storybook for easy component discovery and testing. Includes typography guidelines, color systems, and interactive component previews for consistent design implementation across projects.',
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=qrst',
    tech: ['React', 'Storybook'],
    features: ['Reusable Components', 'Design Guidelines', 'Storybook Documentation', 'Color System'],
    github: '#',
    live: '#'
  },
]

export default function Projects(){
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="py-6 md:py-10">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProjects.map(p=> <ProjectCard key={p.id} project={p} onSelect={setSelectedProject} />)}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
            </div>
            
            <div className="p-6">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-6" />
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="grid grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 text-center font-medium">View Code</a>
                <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 text-center font-medium">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
