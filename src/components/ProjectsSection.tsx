import React from 'react';
import { motion } from 'framer-motion';
import {
  Apple,
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Layers,
  Lock,
  Play,
  Sparkles,
  Store,
  Target,
  Trophy,
} from 'lucide-react';
import GlowCard from './GlowCard';
import { portfolioProfile } from '@/data/portfolio';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const ProjectsSection: React.FC = () => {
  const projects = portfolioProfile.products;

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.36,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Products I Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Dialog key={project.name}>
              <DialogTrigger asChild>
                <motion.button
                  type="button"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="h-full w-full text-left"
                  aria-label={`Open details for ${project.name}`}
                >
                  <GlowCard
                    intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                    className="group h-full min-h-[340px] cursor-pointer"
                    hoverScale={1.015}
                  >
                    <div className="p-6 h-full flex flex-col relative z-10">
                      <div className="absolute -inset-x-4 -inset-y-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl transition-opacity duration-200"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-white via-white/20 to-transparent transition-all duration-200"></div>

                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-2xl font-bold italic group-hover:text-white transition-colors duration-200">
                          {project.name}
                        </h3>
                        {project.status && (
                          <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors duration-200">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-1 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-200 relative mt-auto">
                        <span>View case study</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </GlowCard>
                </motion.button>
              </DialogTrigger>

              <DialogContent className="max-h-[calc(100vh-8rem)] max-w-5xl overflow-y-auto border-white/10 bg-[#050505] p-0 text-white shadow-premium-glow top-[calc(50%+1.5rem)]">
                <div>
                  <div className="border-b border-white/10 bg-white/[0.025] px-6 py-7 md:px-8">
                    <DialogHeader>
                      <div className="mb-4 flex flex-wrap items-center gap-3 pr-8">
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase text-white/50">
                          Product Case Study
                        </span>
                        {project.status && (
                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                            {project.status}
                          </span>
                        )}
                      </div>
                      <DialogTitle className="text-4xl font-bold italic tracking-tight md:text-5xl">
                        {project.name}
                      </DialogTitle>
                      <DialogDescription className="max-w-3xl text-base leading-relaxed text-white/62">
                        {project.tagline ?? project.description}
                      </DialogDescription>
                    </DialogHeader>
                  </div>

                  <div className="grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1fr)_300px] md:px-8">
                    <div className="space-y-9">
                      <section>
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-white/45">
                          <Target className="h-4 w-4" />
                          Overview
                        </div>
                        <p className="text-lg leading-relaxed text-white/76">
                          {project.detailedDescription ?? project.description}
                        </p>
                      </section>

                      {project.architecture && (
                        <section>
                          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-white/45">
                            <Layers className="h-4 w-4" />
                            Technical Architecture
                          </div>
                          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            {project.architecture.map((item) => (
                              <div key={item.label} className="border-l border-white/15 pl-4">
                                <p className="text-xs uppercase text-white/40">{item.label}</p>
                                <p className="mt-1 text-sm text-white/78">{item.value}</p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )}

                      {project.featureGroups ? (
                        <section>
                          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-white/45">
                            <Sparkles className="h-4 w-4" />
                            Capabilities
                          </div>
                          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            {project.featureGroups.map((group) => (
                              <div key={group.title} className="border-t border-white/10 pt-4">
                                <h4 className="font-semibold text-white/90">{group.title}</h4>
                                <ul className="mt-3 space-y-2">
                                  {group.items.map((item) => (
                                    <li key={item} className="text-sm leading-relaxed text-white/62">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </section>
                      ) : (
                        <section>
                          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-white/45">
                            <Sparkles className="h-4 w-4" />
                            Key Work
                          </div>
                          <div className="space-y-3 border-l border-white/10 pl-4">
                            {project.highlights.map((highlight) => (
                              <p key={highlight} className="text-sm leading-relaxed text-white/68">
                                {highlight}
                              </p>
                            ))}
                          </div>
                        </section>
                      )}

                      {project.outcomes && (
                        <section>
                          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-white/45">
                            <Trophy className="h-4 w-4" />
                            Impact
                          </div>
                          <div className="space-y-3">
                            {project.outcomes.map((outcome) => (
                              <p key={outcome} className="text-sm leading-relaxed text-white/68">
                                {outcome}
                              </p>
                            ))}
                          </div>
                        </section>
                      )}
                    </div>

                    <aside className="space-y-5">
                      {project.metrics && (
                        <div className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
                          <h4 className="mb-4 text-sm font-semibold uppercase text-white/45">Snapshot</h4>
                          <div className="space-y-4">
                            {project.metrics.map((metric) => (
                              <div key={metric.label}>
                                <p className="text-xs uppercase text-white/38">{metric.label}</p>
                                <p className="mt-1 text-base font-semibold text-white/88">{metric.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
                        <h4 className="mb-4 text-sm font-semibold uppercase text-white/45">Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/68">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border border-white/10 bg-white/[0.025] p-5">
                        <h4 className="mb-4 text-sm font-semibold uppercase text-white/45">Access</h4>
                        <div className="flex flex-col gap-3">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/45 hover:text-white">
                              <span className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}

                          {project.storeLinks?.map((link) => {
                            const label = link.label.toLowerCase();
                            const Icon = label.includes('app') || label.includes('apple') ? Apple : label.includes('play') ? Play : Store;

                            return (
                              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/45 hover:text-white">
                                <span className="inline-flex items-center gap-2"><Icon className="h-4 w-4" /> {link.label}</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            );
                          })}

                          {project.links?.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/45 hover:text-white">
                              <span className="inline-flex items-center gap-2"><Download className="h-4 w-4" /> {link.label}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ))}

                          {project.privacyNote && (project.githubUrl || project.storeLinks?.length || project.links?.length) && (
                            <div className="flex items-start gap-3 rounded-md border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/55">
                              <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                              <span>{project.privacyNote}</span>
                            </div>
                          )}

                          {!project.githubUrl && !project.storeLinks?.length && !project.links?.length && (
                            <div className="flex items-start gap-3 rounded-md border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/55">
                              <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                              <span>{project.privacyNote ?? 'Links are private or not published yet.'}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
