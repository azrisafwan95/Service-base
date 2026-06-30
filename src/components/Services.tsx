import * as Icons from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Services({ data, cards, contact, theme }: { data: any, cards: any[], contact: any, theme: any }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{data.title} <span className={theme.textAccent}>{data.titleAccent}</span></h2>
        <p className="text-gray-500 mb-16">{data.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = (Icons as any)[card.iconName] || Icons.Wrench;
            return (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto', card.bgLight)}>
                  <Icon className={cn('w-8 h-8', card.iconColor)} />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 mb-8 text-sm">{card.description}</p>
                <a href={contact.whatsappLink} className={cn("inline-block w-full py-3 rounded-xl font-bold transition-colors", theme.button)}>
                  {data.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
