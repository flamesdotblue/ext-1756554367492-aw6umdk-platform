import Spline from '@splinetool/react-spline';
import { Rocket, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
      </div>

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <Zap className="h-4 w-4 text-orange-400" />
            <span>Automate your X (Twitter) growth</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
            Grow on X with smart automations
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            Schedule threads, auto-reply to mentions, curate lists, and analyze performance — all in one sleek dashboard.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 font-medium">
              <Rocket className="h-5 w-5" />
              Start Free Trial
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-6 py-3 font-medium">
              See Features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-white/70 text-sm">
            <span>⚡ No code needed</span>
            <span>🔒 Secure OAuth login</span>
            <span>⏱️ Set up in minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
