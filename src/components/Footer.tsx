export default function Footer({ footer, brand, contact }: { footer: any, brand: any, contact: any }) {
  return (
    <footer className="py-12 bg-gray-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold">{brand.name}<span className="text-orange-500">{brand.accent}</span></h3>
          <p className="text-gray-400 mt-2 text-sm">{brand.description}</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-sm">{footer.copyright}</p>
          <p className="text-gray-500 text-xs mt-1">Hubungi: {contact.phoneDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
