import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const titles = ['AI Engineer', 'Full Stack Developer', 'Software Engineer'];
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Nitik Kumar Garg
        </h1>

        <div className="h-16 mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-400 transition-all duration-500">
            {titles[currentTitle]}
          </h2>
        </div>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dynamic Software Engineer with 3 years of experience building scalable web platforms
          and AI-driven solutions. Transforming complex requirements into production-ready applications.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:nitikkumar299@gmail.com"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="text-white" size={24} />
          </a>
          <a
            href="https://github.com/Nitiksharma999"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Github className="text-white" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nitik-k-sharma-bbb775233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="text-white" size={24} />
          </a>
        </div>

        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce"
        >
          <ChevronDown className="text-white" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
