import { MessageCircle, ArrowRight, Zap, Star, ThermometerSnowflake, CheckCircle2, ShieldCheck } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Hero({ data, contact }: { data: any, contact: any }) {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800')}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1.5">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold">{data.badge}</span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-black text-white leading-[1.1]">
              {data.headline}{' '}
              <span className="text-orange-400">{data.headlineAccent}</span>
            </h1>

            <p className="text-lg text-blue-200 max-w-xl">
              {data.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={contact.whatsappLink} className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" />
                {data.primaryCta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <button onClick={scrollToPricing} className="border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-semibold">
                {data.secondaryCta}
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-blue-200 text-sm">{data.rating} / 5</span>
              </div>
              <span className="text-blue-200 text-sm">{data.ratingCount}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
