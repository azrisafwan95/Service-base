import { Star, MapPin } from 'lucide-react';

export default function Testimonials({ data, cards }: { data: any, cards: any[] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold">{data.title} <span className="text-blue-900">{data.titleAccent}</span></h2>
        <p className="text-gray-500 mt-4">{data.subtitle}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {cards?.map((t: any, i: number) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex mb-4">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-gray-600 italic mb-6">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">{t.avatar}</div>
              <div className="text-left">
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs flex items-center gap-1"><MapPin size={12} />{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
