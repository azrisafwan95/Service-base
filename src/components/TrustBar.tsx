import * as Icons from 'lucide-react';

export default function TrustBar({ text, stats }: { text: string, stats: any[] }) {
  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">{text}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats?.map((s, i) => {
            const Icon = (Icons as any)[s.iconName] || Icons.Star;
            return (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
