import { MessageCircle, ArrowRight, Zap, Star } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Hero({ data, contact, theme }: { data: any, contact: any, theme: any }) {
  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br', theme.gradient)}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="max-w-3xl space-y-8">
          <div className={cn("inline-flex items-center gap-2 border rounded-full px-4 py-1.5", theme.badge)}>
            <Zap size={16} /> <span className="text-sm font-semibold">{data.badge}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            {data.headline} <span className={theme.textAccent}>{data.headlineAccent}</span>
          </h1>
          <p className="text-xl text-white/80 max-w-xl">{data.subheadline}</p>
          <div className="flex gap-4">
            <a href={contact.whatsappLink} className={cn("px-8 py-4 rounded-2xl font-bold flex items-center gap-3", theme.button)}>
              <MessageCircle /> {data.primaryCta} <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
