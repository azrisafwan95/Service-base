import * as Icons from 'lucide-react';

export default function Footer({ brand, footer, links, contact }: { brand: any, footer: any, links: any[], contact: any[] }) {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-2xl">{brand.name}<span className="text-orange-500">{brand.accent}</span></h3>
          <p className="text-sm leading-relaxed">{brand.description}</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Pautan</h4>
          <ul className="space-y-3">
            {links?.map((l, i) => <li key={i}><button className="text-sm hover:text-white transition-colors">{l.label}</button></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
          <ul className="space-y-3">
            {contact?.map((c, i) => <li key={i} className="text-sm"><span className="text-gray-500">{c.label}:</span> {c.value}</li>)}
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-gray-900 text-xs">
        {footer.copyright}
      </div>
    </footer>
  );
}
