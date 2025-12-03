import { ExternalLink, Code } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const featuredProjects = [
    {
      title: 'Unscammed AI',
      description: 'Scam Sensei platform helping seniors recognize voice, SMS, and email scams through realistic simulations. Features Celery-based task scheduling, persona-based risk profiling, and multi-channel delivery.',
      tech: ['Python', 'Django', 'Celery', 'PostgreSQL', 'Vapi', 'ElevenLabs', 'Twilio'],
      url: 'https://unscammed.com/',
    },
    {
      title: 'ITIN Automation',
      description: 'Backend platform for US business formation, ITIN processing, and tax filing. Features automated workflows, OCR-based data extraction, smart bookkeeping via Plaid, and invoice management.',
      tech: ['FastAPI', 'PostgreSQL', 'Stripe', 'Plaid', 'AWS S3', 'OpenAI'],
      url: 'https://itin.hashtoms.com/',
    },
    {
      title: 'Propti',
      description: 'Real estate platform with user, agent, and admin roles. Features AI-powered strata report generation using LLMs and interactive Q&A for property analysis.',
      tech: ['ReactJS', 'FastAPI', 'PostgreSQL', 'LLMs', 'AI'],
      url: 'https://propti.com.au/',
    },
    {
      title: 'Astra Health',
      description: 'AI-powered healthcare platform for medical consultations. Built RESTful APIs with Django and DynamoDB, integrated OpenAI for automated medical insights.',
      tech: ['Django', 'DynamoDB', 'OpenAI', 'Python', 'React'],
      url: 'https://www.astrahealth.ai/',
    },
    {
      title: 'AI Attorney',
      description: 'Full-stack AI-powered legal consultation platform. Features AI legal advisor providing automated, personalized legal advice and insights.',
      tech: ['ReactJS', 'Django', 'OpenAI', 'PostgreSQL'],
      url: 'https://aiattorney.biz/',
    },
    {
      title: 'AI Health Assistant',
      description: 'Health consultation platform with disease analysis through image processing and automated medical report analysis using OpenAI.',
      tech: ['ReactJS', 'Django', 'OpenAI', 'Computer Vision'],
      url: 'https://aihealthassistant.pro/',
    },
  ];

  const otherProjects = [
    {
      title: 'Mantrai',
      description: 'Meditation platform with mood-based personalized audio generation using OpenAI.',
      tech: ['FastAPI', 'OpenAI', 'Audio Processing'],
    },
    {
      title: 'Uinone',
      description: 'iOS social media app backend with advanced content control and security features.',
      tech: ['Django', 'PostgreSQL', 'REST API'],
    },
    {
      title: 'AI Office',
      description: 'Business platform with integrated chat and calling features for collaboration.',
      tech: ['Django', 'WebRTC', 'Real-time Communication'],
    },
    {
      title: 'Nomad',
      description: 'Comprehensive travel platform for restaurants, hotels, flights, taxis, and vacation planning.',
      tech: ['Django', 'PostgreSQL', 'Payment Integration'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-blue-400" size={28} />
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-white text-center mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 text-blue-400 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
