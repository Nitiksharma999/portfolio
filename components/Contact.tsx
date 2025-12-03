import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { EMAIL, PHONE, LOCATION, GITHUB_URL, LINKEDIN_URL } from '../constants';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-3xl -z-10 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
          <Reveal>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Get in Touch</h2>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                I'm always interested in discussing new projects, opportunities in AI engineering,
                or how we can solve complex problems with technology.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${EMAIL}`} className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:scale-110 transition-all text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Email</p>
                    <p className="text-white text-lg group-hover:text-primary transition-colors">{EMAIL}</p>
                  </div>
                </a>

                <div className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:scale-110 transition-all text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                    <p className="text-white text-lg">{PHONE}</p>
                  </div>
                </div>

                <div className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5 group-hover:border-primary/50 group-hover:scale-110 transition-all text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Location</p>
                    <p className="text-white text-lg">{LOCATION}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6">
              {/* Availability Card */}
              <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <span className="flex h-4 w-4 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Available for Work</h3>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    I'm currently open to new opportunities in AI/ML engineering, full-stack development,
                    and innovative tech projects. Let's build something amazing together!
                  </p>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/25"
                    >
                      <Mail className="h-5 w-5" />
                      Send Email
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 text-white font-semibold transition-all transform hover:-translate-y-1"
                    >
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-6">Quick Stats</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                      <div className="text-3xl font-bold text-primary mb-1">3+</div>
                      <div className="text-sm text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-all">
                      <div className="text-3xl font-bold text-secondary mb-1">15+</div>
                      <div className="text-sm text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all">
                      <div className="text-3xl font-bold text-accent mb-1">4</div>
                      <div className="text-sm text-gray-400">Companies</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all">
                      <div className="text-3xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-gray-400">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Nitik Kumar Garg. Crafted with <span className="text-red-500">❤</span> and React.
          </p>
          <div className="flex space-x-6">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><Github className="h-5 w-5" /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-all"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;