import { Check } from 'lucide-react';

export default function Pricing({ data, packages }: { data: any, packages: any[] }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title} <span className="text-blue-600">{data.titleAccent}</span></h2>
        <p className="text-gray-500 mb-12">{data.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${pkg.popular ? 'border-blue-600 shadow-xl' : 'border-gray-100'}`}>
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <div className="my-6">
                <span className="text-4xl font-black">RM{pkg.price}</span>
                <span className="text-gray-500">/{pkg.unit}</span>
              </div>
              <ul className="space-y-4 mb-8 text-left">
                {pkg.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold ${pkg.popular ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
