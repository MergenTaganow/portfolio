import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import GlowCard from './GlowCard';
import { portfolioProfile } from '@/data/portfolio';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-radial-glow-premium opacity-30 top-0 left-1/2 -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Olympiads & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioProfile.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlowCard className="h-full group" intensity={index % 2 === 0 ? 'high' : 'medium'}>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 rounded-full border border-white/10 bg-white/5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold italic">{achievement.title}</h3>
                      <p className="text-sm text-white/50">
                        {[achievement.issuer, achievement.date].filter(Boolean).join(' • ')}
                      </p>
                    </div>
                  </div>

                  {achievement.description && (
                    <p className="text-white/70 mb-5">{achievement.description}</p>
                  )}

                  {achievement.evidence && achievement.evidence.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {achievement.evidence.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-white/60 transition hover:border-white/40 hover:text-white"
                        >
                          {item.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
