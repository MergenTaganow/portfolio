
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioProfile } from '@/data/portfolio';

const ContactSection: React.FC = () => {
  const { person } = portfolioProfile;
  const github = person.links.find((link) => link.label === 'GitHub');
  const linkedin = person.links.find((link) => link.label === 'LinkedIn');

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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-white/10 bg-black/45 p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="space-y-6">
            <p className="text-lg text-white/82 max-w-xl">
              Interested in working together, discussing a product, or exploring a new role? The fastest way to reach me is by email or phone.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <a
                href={`mailto:${person.email}`}
                className="group flex items-center justify-between rounded-lg border border-white/12 bg-white/[0.04] px-5 py-4 transition duration-200 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <Mail className="h-5 w-5 text-white/72 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase text-white/40">Email</p>
                    <p className="text-base text-white/90 truncate">{person.email}</p>
                  </div>
                </div>
                <span className="text-sm text-white/45 group-hover:text-white/75">Open</span>
              </a>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-white/55 shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-white/40">Location</p>
                    <p className="mt-1 text-sm text-white/86">Ashgabat, Turkmenistan</p>
                  </div>
                </div>
              </div>

              <a
                href="tel:+99364556939"
                className="group flex items-center justify-between rounded-lg border border-white/12 bg-white/[0.04] px-5 py-4 transition duration-200 hover:border-white/25 hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <Phone className="h-5 w-5 text-white/72 group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase text-white/40">Phone</p>
                    <p className="text-base text-white/90">+993 64 55 69 39</p>
                  </div>
                </div>
                <span className="text-sm text-white/45 group-hover:text-white/75">Call</span>
              </a>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-4 w-4 mt-0.5 text-white/55 shrink-0" />
                  <div>
                    <p className="text-xs uppercase text-white/40">Availability</p>
                    <p className="mt-1 text-sm text-white/86">Available to discuss new opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={linkedin?.href ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/82 transition duration-200 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <Linkedin className="h-4 w-4 text-white/65" />
                LinkedIn
              </a>

              <a
                href={github?.href ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/82 transition duration-200 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <Github className="h-4 w-4 text-white/65" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
