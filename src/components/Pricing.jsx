import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    cta: 'Get Started',
    features: [
      'Schedule up to 20 posts/mo',
      '1 automated workflow',
      'Basic analytics',
      'Community support'
    ]
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'per month',
    highlight: true,
    cta: 'Start Free Trial',
    features: [
      'Unlimited scheduling',
      'Advanced workflows',
      'Auto-reply & listening',
      'Exportable analytics',
      'Priority support'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your workflow. Upgrade or cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-6 backdrop-blur bg-white/5 border-white/10 ${plan.highlight ? 'ring-2 ring-orange-500' : ''}`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-white/60 text-sm">{plan.period}</p>
                </div>
                <div className="text-3xl font-semibold">{plan.price}<span className="text-base text-white/60">{plan.name === 'Pro' ? '/mo' : ''}</span></div>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/85">
                    <Check className="h-5 w-5 text-orange-400 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 font-medium transition-colors ${plan.highlight ? 'bg-orange-500 hover:bg-orange-600' : 'border border-white/15 bg-white/5 hover:bg-white/10'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-white/60 text-sm">14-day free trial on Pro. No credit card required.</p>
      </div>
    </section>
  );
}
