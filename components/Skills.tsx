import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Database, Layout, Terminal, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes("AI")) return <Cpu className="h-6 w-6 text-secondary" />;
    if (category.includes("Backend")) return <Database className="h-6 w-6 text-primary" />;
    if (category.includes("Frontend")) return <Layout className="h-6 w-6 text-pink-400" />;
    return <Terminal className="h-6 w-6 text-green-400" />;
  };

  const getColor = (category: string) => {
    if (category.includes("AI")) return "border-secondary/50 text-secondary bg-secondary/10";
    if (category.includes("Backend")) return "border-primary/50 text-primary bg-primary/10";
    if (category.includes("Frontend")) return "border-pink-500/50 text-pink-400 bg-pink-500/10";
    return "border-green-500/50 text-green-400 bg-green-500/10";
  };

  return (
    <section id="skills" className="py-24 bg-dark/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
            <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-2">My Arsenal</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical Expertise</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <Reveal key={index} delay={index * 100}>
                <div className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 h-full">
                <div className="flex items-center mb-6 border-b border-white/10 pb-4">
                    <div className={`p-3 rounded-xl border ${getColor(skillGroup.category)}`}>
                    {getIcon(skillGroup.category)}
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill, idx) => (
                    <div 
                        key={idx}
                        className="group flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-300 border border-white/5 hover:border-primary/50 hover:bg-primary/10 hover:text-white transition-all duration-300 cursor-default"
                    >
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-gray-500 group-hover:text-primary transition-colors" />
                        {skill}
                    </div>
                    ))}
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;