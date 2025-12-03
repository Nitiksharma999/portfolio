import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, ChevronDown, Sparkles, Terminal } from 'lucide-react';
import { EMAIL } from '../constants';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "AI Software Engineer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <div className="flex flex-col items-center text-center">
          
          <Reveal>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Available for New Opportunities
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Nitik Kumar <br />
              <span className="text-gradient">Garg</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="h-12 md:h-16 mb-8 flex items-center justify-center">
              <span className="text-2xl md:text-4xl text-gray-300 font-mono typing-cursor">
                {text}
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
              Transforming complex problems into elegant solutions with
              <span className="text-white font-semibold mx-1.5 border-b border-primary/50">Python</span>,
              <span className="text-white font-semibold mx-1.5 border-b border-secondary/50">React</span>, and
              <span className="text-white font-semibold mx-1.5 border-b border-accent/50">Generative AI</span>.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-indigo-600 hover:to-indigo-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Terminal className="h-5 w-5" />
                View My Work
              </a>
              <a 
                href={`mailto:${EMAIL}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface border border-white/10 hover:border-white/20 text-white font-semibold backdrop-blur-md transition-all hover:bg-white/5 flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={800} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
            <a href="#about" className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors animate-bounce">
                <span className="text-xs tracking-widest uppercase">Scroll Down</span>
                <ChevronDown className="h-5 w-5" />
            </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;