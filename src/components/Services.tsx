import * as Icons from 'lucide-react'; // Import semua icon
import { cn } from '@/utils/cn';

export default function Services({ data, cards, contact }: { data: any, cards: any[], contact: any }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">{data.title} <span className="text-blue-600">{data.titleAccent}</span></h2>
          <p className="text-gray-500 mt-4">{data.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            // MAGIC DI SINI: Tukar string "Truck" jadi Komponen <Truck />
            const IconComponent = (Icons as any)[card.iconName] || Icons.Wrench;

            return (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center mb-6', card.bgLight)}>
                  <IconComponent className={cn('w-8 h-8', card.iconColor)} />
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 mb-6">{card.description}</p>
                <ul className="space-y-3 mb-8">
                  {card.features.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icons.CheckCircle2 className="w-4 h-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={contact.whatsappLink} className="font-bold text-blue-900 flex items-center gap-2">
                  {data.cta} <Icons.ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
