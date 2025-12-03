import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark relative">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Career Path</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional Journey</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
        </Reveal>

        <div className="relative">
          {/* Central Timeline Line - only visible on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot - centered */}
                <Reveal delay={index * 100} className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-dark rounded-full border-4 border-primary z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></Reveal>

                {/* Content positioned on alternating sides */}
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  {/* Empty space on one side */}
                  <div className={`hidden md:block ${index % 2 === 0 ? 'order-2' : 'order-1'}`}></div>

                  {/* Content Card */}
                  <div className={`${index % 2 === 0 ? 'order-1 md:pr-12' : 'order-2 md:pl-12'}`}>
                    <Reveal delay={index * 150}>
                      <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Briefcase className="w-24 h-24 text-white" />
                        </div>

                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                          <h4 className="text-lg font-medium text-accent mt-1 mb-4">{exp.company}</h4>

                          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400 border-b border-white/10 pb-4">
                            <span className="flex items-center bg-white/5 px-3 py-1 rounded-full">
                              <Calendar className="w-3.5 h-3.5 mr-2 text-primary" /> {exp.period}
                            </span>
                            <span className="flex items-center bg-white/5 px-3 py-1 rounded-full">
                              <MapPin className="w-3.5 h-3.5 mr-2 text-secondary" /> {exp.location}
                            </span>
                          </div>

                          <ul className="space-y-3">
                            {exp.achievements.map((item, i) => (
                              <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;