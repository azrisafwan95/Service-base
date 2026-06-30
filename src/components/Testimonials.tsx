import { Star, MapPin } from 'lucide-react';
import { cn } from '@/utils/cn';
import { TESTIMONIALS, TESTIMONIAL_CARDS } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface TestimonialsProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

export default function Testimonials({ className }: TestimonialsProps) {
  return (
    <section id="testimonials" className={cn('py-20 lg:py-28 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            {TESTIMONIALS.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {TESTIMONIALS.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
              {TESTIMONIALS.titleAccent}
            </span>
          </h2>
          <p className="text-gray-500 text-lg">{TESTIMONIALS.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIAL_CARDS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
