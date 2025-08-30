import { Clock, Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Smart Scheduling',
    desc: 'Plan tweets and threads with best-time suggestions based on your audience activity.'
  },
  {
    icon: Zap,
    title: 'Auto-Engage',
    desc: 'Auto-like and reply to mentions and keywords with safe guardrails and human-like timing.'
  },
  {
    icon: Shield,
    title: 'Safe by Design',
    desc: 'Rate limits, randomized delays, and transparent logs keep your account protected.'
  },
  {
    icon: BarChart3,
    title: 'Actionable Analytics',
    desc: 'Track growth, CTR, and engagement to refine what works — all in one dashboard.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to scale</h2>
          <p className="mt-3 text-white/70">Automations that save time without sacrificing authenticity. Designed for creators, founders, and teams.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.075] transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
