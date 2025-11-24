import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Get In Touch
          </h2>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-xl">
            <p className="text-gray-300 text-lg text-center mb-12 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out if you'd like to connect!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a
                href="mailto:nitikkumar299@gmail.com"
                className="flex items-center p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Mail className="text-blue-400 mr-4 group-hover:scale-110 transition-transform" size={28} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">nitikkumar299@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+917307628384"
                className="flex items-center p-6 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Phone className="text-blue-400 mr-4 group-hover:scale-110 transition-transform" size={28} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+91 7307628384</p>
                </div>
              </a>

              <div className="flex items-center p-6 bg-slate-700/50 rounded-lg">
                <MapPin className="text-blue-400 mr-4" size={28} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Pathankot, Punjab, India</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-6 bg-slate-700/50 rounded-lg">
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/Nitiksharma999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nitik-k-sharma-bbb775233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                  >
                    <Linkedin size={32} />
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="mailto:nitikkumar299@gmail.com"
                className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </a>
            </div>
          </div>

          <footer className="mt-16 text-center text-gray-400">
            <p>© 2025 Nitik Kumar Garg. Built with React & Tailwind CSS.</p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
