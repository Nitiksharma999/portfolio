import { useInView } from '../hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: ['Python', 'Django', 'FastAPI', 'Flask', 'JavaScript', 'TypeScript', 'ReactJS', 'Next.js'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['LLMs', 'OpenAI', 'AI Agents', 'Langchain', 'Crew.ai', 'Autogen.ai', 'VAPI', 'AI Chatbots'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'ORMs'],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'S3', 'EC2', 'Git', 'Docker', 'CI/CD'],
    },
    {
      category: 'Tools & Services',
      skills: ['Celery', 'Twilio', 'Stripe', 'Plaid', 'Postman', 'FileZilla'],
    },
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'React Bootstrap', 'Responsive Design'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-blue-400/30 pb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-lg text-sm hover:bg-blue-600/30 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Achievements</h3>
            <p className="text-gray-300 text-center text-lg">
              3x Employee of the Month - Recognized for punctuality, dedication, and consistently
              delivering projects on schedule throughout 3 years of professional experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
