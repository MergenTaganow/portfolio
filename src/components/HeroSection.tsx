
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone } from 'lucide-react';
import { portfolioProfile } from '@/data/portfolio';

const HeroSection: React.FC = () => {
  const { person, metrics } = portfolioProfile;
  const [portraitLoaded, setPortraitLoaded] = useState(true);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-start px-4 pt-10 pb-20 md:pt-14 relative overflow-hidden">
      {/* Premium corner light effects */}
      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}></div>
      
      {/* Light rays */}
      <div className="light-ray-premium opacity-30" style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}></div>
      <div className="light-ray-premium opacity-10" style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}></div>
      
      {/* Central premium glow effect */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
        <div className="text-left">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Smartphone className="w-4 h-4" />
            {person.headline}
          </motion.div>

          <motion.h1
            className="hero-heading relative max-w-4xl text-4xl md:text-6xl font-extrabold italic mb-6 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="absolute -inset-x-8 -inset-y-5 bg-white/[0.025] rounded-3xl blur-2xl -z-10"></span>
            Hi, I'm {person.name}.
          </motion.h1>

          <motion.p
            className="text-base md:text-lg font-light text-white/72 mb-6 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {person.summary}
          </motion.p>

        <motion.div
          className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/60"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2">
            <MapPin className="w-4 h-4" />
            {person.location}
          </span>
          {person.availability.slice(0, 2).map((item) => (
            <span key={item} className="rounded-full border border-white/10 px-3 py-2">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="glow-card px-4 py-3">
              <p className="text-2xl font-bold italic">{metric.value}</p>
              <p className="text-xs uppercase text-white/50">{metric.label}</p>
            </div>
          ))}
        </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px]"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute -inset-8 rounded-full bg-white/[0.06] blur-3xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-premium-glow backdrop-blur-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-dark-100">
              {portraitLoaded ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover grayscale"
                  onError={() => setPortraitLoaded(false)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-dark-100 via-black to-dark-200 text-center">
                  <span className="text-7xl font-extrabold italic text-white/85">MT</span>
                  <span className="mt-4 text-sm uppercase text-white/45">{person.name}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
