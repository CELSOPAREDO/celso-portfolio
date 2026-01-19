import React from 'react'
import ProjectCard from './ProjectCard'

const sampleProjects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A responsive web app with modern UI and animations.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An e-commerce frontend with optimized performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=mnop',
    tech: ['React', 'Vite', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Design system and component library.',
    image: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=qrst',
    tech: ['React', 'Storybook'],
    github: '#',
    live: '#'
  },
]

export default function Projects(){
  return (
    <div className="py-6 md:py-10">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProjects.map(p=> <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
