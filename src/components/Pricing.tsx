import { Wallet, CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { CONTACT, PRICING, PRICING_PACKAGES } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface PricingProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

export default function Pricing({ className }: PricingProps) {
  return (
    <section id="pricing" className={cn('py-20 lg:py-28 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Wallet className="w-4 h-4" />
            {PRICING.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {PRICING.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {PRICING.titleAccent}
            </span>
          </h2>
          <p className="text-gray-500 text-lg">{PRICING.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {PRICING_PACKAGES.map((pkg, i) => (
            <div
              key={i}
              className={cn(
                'relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2',
                pkg.popular
                  ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white shadow-2xl shadow-blue-900/20 md:scale-105'
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-xl'
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    Paling Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn('text-xl font-bold mb-2', pkg.popular ? 'text-white' : 'text-gray-900')}>
                  {pkg.name}
                </h3>
                <p className={cn('text-sm', pkg.popular ? 'text-blue-200' : 'text-gray-500')}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={cn('text-sm', pkg.popular ? 'text-blue-200' : 'text-gray-500')}>RM</span>
                  <span className={cn('text-5xl font-black', pkg.popular ? 'text-white' : 'text-gray-900')}>
                    {pkg.price}
                  </span>
                </div>
                <p className={cn('text-sm mt-1', pkg.popular ? 'text-blue-200' : 'text-gray-400')}>
                  bermula dari /{pkg.unit}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className={cn('flex items-center gap-3 text-sm', pkg.popular ? 'text-blue-100' : 'text-gray-600')}>
                    <CheckCircle2 className={cn('w-4 h-4 flex-shrink-0', pkg.popular ? 'text-orange-400' : 'text-green-500')} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'block w-full text-center py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:shadow-lg',
                  pkg.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-orange-500/25'
                    : 'bg-blue-900 hover:bg-blue-800 text-white hover:shadow-blue-900/25'
                )}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
