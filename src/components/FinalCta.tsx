import { MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function FinalCta({ data, contact, theme }: { data: any, contact: any, theme: any }) {
  return (
    <section className={cn("py-20 text-white text-center relative overflow-hidden", theme.gradient)}>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-6">{data.headline} <span className={theme.textAccent}>{data.headlineAccent}</span></h2>
        <p className="mb-10 text-blue-100 text-lg">{data.subtitle}</p>
        <a href={contact.whatsappLink} className={cn("inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold transition-all", theme.button)}>
          <MessageCircle /> {data.primaryCta} <ArrowRight />
        </a>
      </div>
    </section>
  );
}
