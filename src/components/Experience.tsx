import { Briefcase, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      company: 'Softradix Software Solutions Pvt. Ltd',
      role: 'AI Software Engineer',
      period: '01/2025 - 11/2025',
      location: 'Mohali, India',
      achievements: [
        'Led end-to-end development of Scam Sensei (Unscammed AI) and ITIN Automation System',
        'Engineered AI/ML-driven workflows boosting system accuracy and automation',
        'Built scalable backends using Python, Django/FastAPI, Celery, PostgreSQL',
        'Integrated multi-channel interactions via Twilio, VAPI, ElevenLabs, SMTP',
        'Provided technical leadership through code reviews and mentoring',
      ],
    },
    {
      company: 'NetSet Software Solutions Pvt. Ltd',
      role: 'Jr. Software Developer',
      period: '10/2023 - 01/2025',
      location: 'Mohali, India',
      achievements: [
        'Full Stack Developer at ISO 9001, ISO 27001, CMMI Level 3 certified company',
        'Designed and maintained scalable web and AI-driven applications',
        'Built optimized backend services using Python, Django, and FastAPI',
        'Developed responsive frontend interfaces using ReactJS',
        'Collaborated across SDLC processes ensuring quality delivery',
      ],
    },
    {
      company: 'Zenid Infotech Pvt. Ltd',
      role: 'Python/Django Developer',
      period: '09/2022 - 09/2023',
      location: 'Mohali, India',
      achievements: [
        'Participated in full application development lifecycle',
        'Developed functional web applications with clean, maintainable code',
        'Built and maintained RESTful APIs for seamless service communication',
        'Integrated legacy applications with modern technologies',
        'Developed reusable code libraries accelerating development',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center text-blue-400 mb-2">
                      <Briefcase size={20} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar size={20} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
