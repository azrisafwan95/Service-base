import * as Icons from 'lucide-react';

export default function WhyChooseUs({ data, features }: { data: any, features: any[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">{data.title} <span className="text-orange-500">{data.titleAccent}</span></h2>
          <p className="text-gray-500 mb-10 leading-relaxed">{data.subtitle}</p>
          <div className="space-y-6">
            {features?.map((f: any, i: number) => {
              const Icon = (Icons as any)[f.iconName] || Icons.Check;
              return (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-white flex-shrink-0"><Icon size={24} /></div>
                  <div><h4 className="font-bold text-lg">{f.title}</h4><p className="text-sm text-gray-500">{f.description}</p></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl">
          <p className="font-bold text-xl mb-6">{data.checklistHeader}</p>
          {data.checklistItems?.map((item: string, i: number) => (
            <div key={i} className="flex items-center gap-3 mb-4"><Icons.CheckCircle2 className="text-green-500" /> <span>{item}</span></div>
          ))}
          <div className="mt-8 bg-white/10 p-5 rounded-2xl italic text-sm border border-white/10">
            {data.testimonialText}
            <p className="mt-2 text-blue-200 not-italic font-bold">{data.testimonialAuthor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
