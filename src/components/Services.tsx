import { Wrench, Droplets, Plug, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { CONTACT, SERVICES, SERVICE_CARDS } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface ServicesProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

const SERVICE_ICONS = [Droplets, Wrench, Plug];

export default function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('py-20 lg:py-28 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            {SERVICES.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {SERVICES.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
              {SERVICES.titleAccent}
            </span>
          </h2>
          <p className="text-gray-500 text-lg">{SERVICES.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((card, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div
                  className={cn(
                    'absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                    card.color
                  )}
                />
                <div
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300',
                    card.bgLight
                  )}
                >
                  <Icon className={cn('w-8 h-8', card.iconColor)} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{card.description}</p>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 group-hover:text-orange-500 transition-colors"
                >
                  {SERVICES.cta}{' '}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
