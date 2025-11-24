import { Award, Code, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: <Code size={32} />,
      title: '3 Years Experience',
      description: 'Building scalable web and AI platforms',
    },
    {
      icon: <Zap size={32} />,
      title: 'AI Innovation',
      description: 'Expertise in LLMs, AI agents, and automation',
    },
    {
      icon: <Award size={32} />,
      title: '3x Employee of Month',
      description: 'Recognized for dedication and timely delivery',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a results-oriented Software Engineer specializing in building scalable web platforms
              and AI-driven solutions. With proficiency in Python (Django, FastAPI, Flask) and modern
              JavaScript frameworks (React.js, Next.js), I excel at designing secure APIs, integrating
              Large Language Models, and deploying cloud-based systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans end-to-end product development, from architecture planning to deployment,
              with a strong focus on performance optimization and workflow automation. I'm passionate about
              translating complex requirements into production-ready solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
