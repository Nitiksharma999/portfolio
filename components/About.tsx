import React from 'react';
import { SUMMARY } from '../constants';
import { GraduationCap, Award, Brain, Code, TerminalSquare } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
            <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full">Bio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">About Me</h2>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <Reveal className="order-2 md:order-1">
             <div className="relative group">
                {/* Image Frame Border */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-70 blur-md group-hover:opacity-100 transition-duration-500"></div>
                <div className="relative rounded-xl overflow-hidden bg-background border border-white/10">
                    <div className="h-[400px] w-full bg-[#1e1e1e] flex items-center justify-center relative overflow-hidden">
                         {/* Abstract Code Pattern Representation */}
                        <div className="absolute inset-0 p-6 font-mono text-xs text-gray-600 opacity-30 select-none overflow-hidden">
                            {Array.from({length: 20}).map((_, i) => (
                                <div key={i} className="whitespace-nowrap">
                                    <span className="text-purple-400">def</span> <span className="text-yellow-200">optimize_workflow</span>(self, requirements):<br/>
                                    &nbsp;&nbsp;agents = <span className="text-blue-400">AI_Agents</span>.init()<br/>
                                    &nbsp;&nbsp;<span className="text-pink-400">return</span> agents.solve(requirements)
                                </div>
                            ))}
                        </div>
                        <TerminalSquare className="w-24 h-24 text-white/20" />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
                         <div className="flex items-center gap-3">
                             <div className="h-3 w-3 rounded-full bg-red-500"></div>
                             <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                             <div className="h-3 w-3 rounded-full bg-green-500"></div>
                         </div>
                    </div>
                </div>
             </div>
          </Reveal>
          
          <div className="order-1 md:order-2 space-y-8">
            <Reveal delay={200}>
                <h3 className="text-2xl font-bold text-white mb-4">
                    Architecting the future with <span className="text-primary">Artificial Intelligence</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                    {SUMMARY}
                </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Reveal delay={300}>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary mb-2" />
                        <h3 className="text-base font-bold text-white">Education</h3>
                        <p className="text-gray-400 text-sm">B.Tech Computer Science</p>
                    </div>
                </Reveal>

                <Reveal delay={400}>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors">
                        <Award className="h-6 w-6 text-secondary mb-2" />
                        <h3 className="text-base font-bold text-white">Experience</h3>
                        <p className="text-gray-400 text-sm">3+ Years Industry Exp</p>
                    </div>
                </Reveal>

                <Reveal delay={500}>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                        <Brain className="h-6 w-6 text-accent mb-2" />
                        <h3 className="text-base font-bold text-white">Gen AI</h3>
                        <p className="text-gray-400 text-sm">LLMs & Agents Specialist</p>
                    </div>
                </Reveal>

                <Reveal delay={600}>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors">
                        <Code className="h-6 w-6 text-pink-500 mb-2" />
                        <h3 className="text-base font-bold text-white">Full Stack</h3>
                        <p className="text-gray-400 text-sm">Python & React Ecosystem</p>
                    </div>
                </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;