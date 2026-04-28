import React from 'react';
import {
  Apple,
  Bot,
  Brain,
  Braces,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  Gauge,
  Github,
  HardDrive,
  Layers,
  Map,
  MonitorSmartphone,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  WandSparkles,
  Wifi,
  Workflow,
  Wrench,
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const rows = [
    {
      direction: 'right',
      items: [
        { title: 'Flutter', icon: MonitorSmartphone },
        { title: 'Dart', icon: Code2 },
        { title: 'Cross-platform mobile', icon: MonitorSmartphone },
        { title: 'iOS', icon: Apple },
        { title: 'Android', icon: Bot },
        { title: 'Riverpod', icon: Workflow },
        { title: 'Bloc', icon: Layers },
        { title: 'Clean Architecture', icon: Braces },
        { title: 'Performance Optimization', icon: Gauge },
        { title: 'Real-time Features', icon: Radio },
      ],
    },
    {
      direction: 'left',
      items: [
        { title: 'Firebase', icon: Cloud },
        { title: 'Firestore', icon: Database },
        { title: 'Realtime Database', icon: Radio },
        { title: 'SQLite', icon: HardDrive },
        { title: 'Hive', icon: HardDrive },
        { title: 'REST APIs', icon: Braces },
        { title: 'Socket.IO', icon: Wifi },
        { title: 'Google Maps', icon: Map },
        { title: 'Offline-first Flows', icon: HardDrive },
        { title: 'Scalable State Management', icon: Workflow },
      ],
    },
    {
      direction: 'right',
      items: [
        { title: 'AI Enthusiast', icon: Brain },
        { title: 'AI Personalization', icon: Sparkles },
        { title: 'Recommendation Systems', icon: WandSparkles },
        { title: 'User Behavior Analytics', icon: ChartNoAxesCombined },
        { title: 'OpenAI APIs', icon: Brain },
        { title: 'ML Kit', icon: Bot },
        { title: 'Analytics Dashboards', icon: ChartNoAxesCombined },
        { title: 'Product Discovery', icon: Store },
        { title: 'Automation', icon: Wrench },
        { title: 'Data-driven UX', icon: Gauge },
      ],
    },
    {
      direction: 'left',
      items: [
        { title: 'App Store Releases', icon: Apple },
        { title: 'Google Play Releases', icon: Store },
        { title: 'Codemagic', icon: Rocket },
        { title: 'GitHub Actions', icon: Github },
        { title: 'Fastlane', icon: Rocket },
        { title: 'Crashlytics', icon: ShieldCheck },
        { title: 'Sentry', icon: ShieldCheck },
        { title: 'App Signing', icon: ShieldCheck },
        { title: 'Xcode', icon: Wrench },
        { title: 'Android Studio', icon: Wrench },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading-premium">Technical Stack</h2>
      </div>

      <div className="relative z-10 space-y-5">
        {rows.map((row) => {
          const repeatedItems = [...row.items, ...row.items];

          return (
            <div key={row.direction + row.items[0].title} className="relative overflow-hidden">
              <div
                className={`flex w-max whitespace-nowrap py-1 ${
                  row.direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'
                }`}
              >
                {repeatedItems.map((tech, index) => {
                  const Icon = tech.icon;

                  return (
                  <span key={`${tech.title}-${index}`} className="tech-badge-premium mx-3 flex items-center">
                    <Icon className="w-5 h-5 mr-2" />
                    {tech.title}
                  </span>
                  );
                })}
              </div>
            </div>
          );
        })}
        </div>
    </section>
  );
};

export default TechMarquee;
