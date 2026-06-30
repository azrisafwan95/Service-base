import * as Icons from 'lucide-react';

export default function TrustBar({ text, stats }: { text: string, stats: any[] }) {
  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">{text}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = (Icons as any)[stat.iconName] || Icons.Star;
            return (
              <div key={i} className="text-center">
                <div className="inline-flex w-12 h-12 rounded-xl bg-blue-50 text-blue-900 mb-3 items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
