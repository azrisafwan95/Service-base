import { MessageCircle } from 'lucide-react';

export default function FinalCta({ data, contact }: { data: any, contact: any }) {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-6">{data.headline} <span className="text-orange-400">{data.headlineAccent}</span></h2>
        <p className="text-blue-100 mb-10 text-lg">{data.subtitle}</p>
        <a href={contact.whatsappLink} className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-2xl text-xl font-bold transition-transform hover:-translate-y-1">
          <MessageCircle /> {data.primaryCta}
        </a>
      </div>
    </section>
  );
}
