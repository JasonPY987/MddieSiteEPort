'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    gradient: 'from-purple-600 to-blue-600',
    title: 'SOC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 2,
    gradient: 'from-blue-600 to-cyan-500',
    title: 'Project walkthroughs!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    id: 3,
    gradient: 'from-cyan-500 to-teal-500',
    title: 'MY Cyber ToolKit',
    description: 'LAMBDA NEW KY',
    link: '#',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-3 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  }
];

export default function ProjectLinks() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="h-[300px] bg-black/20 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`group relative h-[300px] rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient}`}
          >
            {/* Content */}
            <div className="absolute inset-0 flex flex-col p-6 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="h-full flex flex-col"
              >
                {/* Icon */}
                <div className="mb-auto">
                  {project.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 mb-3 transition-opacity duration-300 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm group-hover:text-white/90">
                    <span className="font-medium">Learn More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}