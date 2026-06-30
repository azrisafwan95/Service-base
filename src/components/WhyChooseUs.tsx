import * as Icons from 'lucide-react';

export default function WhyChooseUs({ data, features }: { data: any, features: any[] }) {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-4xl font-bold mb-6">{data.title} <span className="text-orange-500">{data.titleAccent}</span></h2>
           <p className="text-gray-500 mb-10">{data.subtitle}</p>
           <div className="space-y-6">
              {features.map((f, i) => {
                const Icon = (Icons as any)[f.iconName] || Icons.CheckCircle2;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold">{f.title}</h3>
                      <p className="text-gray-500 text-sm">{f.description}</p>
                    </div>
                  </div>
                );
              })}
           </div>
        </div>
        {/* Right side Visual - Ambil dari data.checklistItems */}
        <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl">
            <p className="font-bold text-xl mb-6">{data.checklistHeader}</p>
            {data.checklistItems?.map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <Icons.CheckCircle2 className="text-green-500" /> <span>{item}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
