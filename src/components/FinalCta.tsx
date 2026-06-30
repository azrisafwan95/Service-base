import { Zap, MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { cn } from '@/utils/cn';
import { CONTACT, FINAL_CTA } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface FinalCtaProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

export default function FinalCta({ className }: FinalCtaProps) {
  return (
    <section className={cn('py-20 lg:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden', className)}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5 mb-6">
          <Zap className="w-4 h-4 text-orange-400" />
          <span className="text-orange-300 text-sm font-semibold">{FINAL_CTA.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
          {FINAL_CTA.headline}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
            {FINAL_CTA.headlineAccent}
          </span>
        </h2>

        <p className="text-blue-200 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {FINAL_CTA.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1 flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            {FINAL_CTA.primaryCta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={CONTACT.phoneLink}
            className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            {FINAL_CTA.secondaryCta}
          </a>
        </div>

        <p className="text-blue-300/60 text-sm mt-6">{FINAL_CTA.note}</p>
      </div>
    </section>
  );
}
