import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Zap, Layers, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
            <div className="text-center mb-16">
            <span className="text-accent font-mono text-sm tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">Featured Projects</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
                A showcase of AI innovations, full-stack platforms, and scalable backend solutions.
            </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={index * 100}>
                <div className="group h-full relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                    
                    {/* Decorative Header Gradient - Acts as "Thumbnail" */}
                    <div className={`h-32 w-full bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity ${
                        index % 3 === 0 ? 'from-primary/20 to-purple-900/40' : 
                        index % 3 === 1 ? 'from-secondary/20 to-pink-900/40' : 
                        'from-accent/20 to-blue-900/40'
                    } flex items-center justify-center relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
                        <Layers className={`w-12 h-12 ${
                             index % 3 === 0 ? 'text-primary' : 
                             index % 3 === 1 ? 'text-secondary' : 
                             'text-accent'
                        } opacity-50 group-hover:scale-110 transition-transform duration-500`} />
                        
                        {project.url && (
                             <a 
                             href={project.url} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="absolute top-4 right-4 p-2 bg-black/30 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-black/50 transition-all"
                             >
                                 <ArrowUpRight className="w-5 h-5" />
                             </a>
                        )}
                    </div>

                    <div className="p-8">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                            {project.description}
                        </p>

                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.slice(0, 4).map((tech, idx) => (
                                    <span 
                                    key={idx} 
                                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="pt-4 border-t border-white/5">
                                <ul className="space-y-2">
                                    {project.features.slice(0, 2).map((feat, i) => (
                                        <li key={i} className="flex items-start text-xs text-gray-500">
                                            <Zap className="w-3.5 h-3.5 mr-2 text-yellow-500/70 shrink-0 mt-0.5" />
                                            <span className="line-clamp-1">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;