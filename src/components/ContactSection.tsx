
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Github, Linkedin, Mail, MapPin, PlaneTakeoff } from 'lucide-react';
import { toast } from 'sonner';
import { portfolioProfile } from '@/data/portfolio';

const ContactSection: React.FC = () => {
  const { person } = portfolioProfile;
  const github = person.links.find((link) => link.label === 'GitHub');
  const linkedin = person.links.find((link) => link.label === 'LinkedIn');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          className="section-heading relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg mb-6 text-white/80">
              Have a Flutter product, mobile architecture challenge, or a role worth discussing? Feel free to reach out.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus-glow transition-all focus:border-white/30"
                />
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus-glow transition-all focus:border-white/30"
                />
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              
              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus-glow transition-all focus:border-white/30 resize-none"
                ></textarea>
                <div className="absolute inset-0 rounded-md bg-white/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity -z-10"></div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-center"
          >
            <div className="p-8 flex flex-col relative overflow-hidden rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm">
              {/* Inner highlight effect */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <h3 className="text-xl font-bold italic mb-6 text-center">Connect with me</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/60 shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-white/40">Location</p>
                    <p className="text-sm text-white/80">Ashgabat, Turkmenistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <Briefcase className="w-4 h-4 mt-0.5 text-white/60 shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-white/40">Availability</p>
                    <p className="text-sm text-white/80">Available to discuss new job opportunities</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <PlaneTakeoff className="w-4 h-4 mt-0.5 text-white/60 shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-white/40">Work Preference</p>
                    <p className="text-sm text-white/80">Open to remote work and relocation</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-6 mb-6">
                <a 
                  href={github?.href ?? '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110 group"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Github className="w-5 h-5 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
                </a>
                
                <a 
                  href={`mailto:${person.email}`} 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110 group"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Mail className="w-5 h-5 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
                </a>
                
                <a 
                  href={linkedin?.href ?? '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110 group"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity"></div>
                </a>
              </div>
              
              <div className="text-center relative z-10">
                <p className="text-white/70 mb-1">Or email me at:</p>
                <a 
                  href={`mailto:${person.email}`} 
                  className="text-white hover:underline hover:text-white/90 transition-colors relative group"
                >
                  {person.email}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/50 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
