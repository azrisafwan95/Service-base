import { 
  Navbar, Hero, TrustBar, Services, WhyChooseUs, 
  Testimonials, Pricing, FinalCta, Footer, WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';
  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  // Debugging: Tengok kat console phone kalau boleh
  console.log("Content data:", content);

  // Jika content gagal load, tunjuk mesej error simple
  if (!content) return <div className="p-10 text-red-500">Data untuk niche "{nicheQuery}" tidak dijumpai!</div>;

  return (
    <div className="font-sans antialiased">
      {/* 
         Guna Short-circuiting (&&) supaya kalau data tak ada, 
         dia tak render komponen tu (elak blank putih)
      */}
      
      {content.BRAND && <Navbar brand={content.BRAND} items={content.NAV_ITEMS} />}
      
      {content.HERO && <Hero data={content.HERO} contact={content.CONTACT} />}
      
      {content.TRUST_BAR_TEXT && <TrustBar text={content.TRUST_BAR_TEXT} stats={content.TRUST_STATS} />}
      
      {content.SERVICES && (
        <Services 
          data={content.SERVICES} 
          cards={content.SERVICE_CARDS} 
          contact={content.CONTACT}
        />
      )}

      {/* Cuba render 4 komponen atas ni dulu */}
      
      {content.FINAL_CTA && <FinalCta data={content.FINAL_CTA} contact={content.CONTACT} />}
      
      <Footer brand={content.BRAND} contact={content.CONTACT} />
      
      <WhatsAppFloat contact={content.CONTACT} />
    </div>
  );
}
