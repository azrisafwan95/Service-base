import { CheckCircle2 } from 'lucide-react';

export default function Pricing({ data, packages, contact }: { data: any, packages: any[], contact: any }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{data.title} <span className="text-orange-500">{data.titleAccent}</span></h2>
        <p className="text-gray-500 mb-16">{data.subtitle}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages?.map((p, i) => (
            <div key={i} className={`p-8 rounded-3xl bg-white border ${p.popular ? 'border-blue-600 shadow-xl' : 'border-gray-100'}`}>
              <h3 className="font-bold text-xl">{p.name}</h3>
              <div className="my-6"><span className="text-4xl font-black">RM{p.price}</span><span className="text-gray-400">/{p.unit}</span></div>
              <ul className="text-left mb-8 space-y-3">
                {p.features?.map((f: string, j: number) => <li key={j} className="text-sm flex gap-2 items-center"><CheckCircle2 size={16} className="text-green-500" /> {f}</li>)}
              </ul>
              <a href={contact.whatsappLink} className="block w-full py-4 bg-blue-900 text-white rounded-2xl font-bold text-center">{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
