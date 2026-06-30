import {
  Zap,
  MessageCircle,
  ArrowRight,
  ThermometerSnowflake,
  CheckCircle2,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { cn } from '@/utils/cn';
import { CONTACT, HERO } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface HeroProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

export default function Hero({ className }: HeroProps) {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800',
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-orange-300 text-sm font-semibold">{HERO.badge}</span>
              </div>
            </div>

            <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
              {HERO.headline}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                {HERO.headlineAccent}
              </span>{' '}
              & Pantas
            </h1>

            <p className="animate-fade-in-delay-2 text-lg sm:text-xl text-blue-200 max-w-xl leading-relaxed">
              {HERO.subheadline}
            </p>

            <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {HERO.primaryCta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                type="button"
                onClick={scrollToPricing}
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1 text-center"
              >
                {HERO.secondaryCta}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 pt-4 animate-fade-in-delay-3">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-blue-200 text-sm">{HERO.rating}{HERO.ratingLabel}</span>
              </div>
              <div className="w-px h-5 bg-blue-400/30" />
              <span className="text-blue-200 text-sm">{HERO.ratingCount}</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-full flex items-center justify-center animate-float">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-800/50 to-blue-900/50 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <div className="text-center space-y-3">
                    <ThermometerSnowflake className="w-16 h-16 text-orange-400 mx-auto" />
                    <p className="text-white font-bold text-2xl">{HERO.visualLabel}</p>
                    <p className="text-blue-200 text-sm">{HERO.visualSub}</p>
                  </div>
                </div>
              </div>
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-slide-up-delay-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-gray-800 font-semibold text-sm">{HERO.floatingBadge1}</span>
                </div>
                <p className="text-gray-500 text-xs">{HERO.floatingBadge1Sub}</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-slide-up-delay-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-800 font-semibold text-sm">{HERO.floatingBadge2}</span>
                </div>
                <p className="text-gray-500 text-xs">{HERO.floatingBadge2Sub}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45C96 40 192 30 288 33C384 36 480 52 576 58C672 64 768 60 864 52C960 44 1056 32 1152 30C1248 28 1344 36 1392 40L1440 44V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
