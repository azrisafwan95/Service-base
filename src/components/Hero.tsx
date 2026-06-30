// Terima props 'data' dan 'contact' dari App.tsx
export default function Hero({ data, contact }: { data: any, contact: any }) {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative ..."> 
      {/* Semua ayat keras (hardcoded) diganti dengan data dari props */}
      <span className="text-orange-300">{data.badge}</span>
      
      <h1 className="...">
        {data.headline}{' '}
        <span className="text-orange-400">{data.headlineAccent}</span>
      </h1>

      <p className="...">{data.subheadline}</p>

      <div className="flex gap-4">
        <a href={contact.whatsappLink} className="...">
          {data.primaryCta}
        </a>
        <button onClick={scrollToPricing} className="...">
          {data.secondaryCta}
        </button>
      </div>
      
      {/* Stats pun ambil dari data */}
      <span>{data.rating}</span>
      <span>{data.ratingCount}</span>
    </section>
  );
}
