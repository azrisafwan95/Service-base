import { Star, Clock, ShieldCheck, Wallet, Award, ThumbsUp, CheckCircle2 } from 'lucide-react';
import { cn } from '@/utils/cn';
import { WHY_US, WHY_US_FEATURES } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface WhyChooseUsProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

const FEATURE_ICONS = [Clock, ShieldCheck, Wallet, Award];

export default function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section id="why-us" className={cn('py-20 lg:py-28 bg-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              {WHY_US.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {WHY_US.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                {WHY_US.titleAccent}
              </span>{' '}
              Kami
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">{WHY_US.subtitle}</p>

            <div className="space-y-6">
              {WHY_US_FEATURES.map((feature, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Visual Panel */}
          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-10 space-y-8 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <ThumbsUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">{WHY_US.checklistHeader}</p>
                  <p className="text-blue-200 text-sm">{WHY_US.checklistSub}</p>
                </div>
              </div>

              <div className="space-y-4">
                {WHY_US.checklistItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white text-sm italic leading-relaxed">{WHY_US.testimonialText}</p>
                <p className="text-blue-200 text-xs mt-2">{WHY_US.testimonialAuthor}</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
