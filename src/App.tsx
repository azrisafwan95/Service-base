import { 
  Navbar, Hero, TrustBar, Services, WhyChooseUs, 
  Testimonials, Pricing, FinalCta, Footer, WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  // Ambil niche dari URL
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';
  
  // 1. Check adakah ALL_PRESETS wujud?
  if (!ALL_PRESETS) {
    return <div className="p-10 text-red-500 bg-white">ERROR: Fail presets/index.ts gagal dimuatkan!</div>;
  }

  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  // 2. Check adakah content wujud?
  if (!content) {
    return <div className="p-10 text-red-500 bg-white">ERROR: Data untuk "{nicheQuery}" kosong! Check fail lori.ts/aircond.ts</div>;
  }

  return (
    <div className="font-sans antialiased">
      {/* Jika komponen rosak, bahagian lain tetap muncul */}
      
      {content.BRAND && content.CONTACT && (
        <Navbar brand={content.BRAND} contact={content.CONTACT} items={content.NAV_ITEMS || []} theme={content.THEME} />
      )}
      
      {content.HERO && content.CONTACT && content.THEME ? (
        <Hero data={content.HERO} contact={content.CONTACT} theme={content.THEME} />
      ) : <div className="p-4 bg-yellow-100 text-yellow-800">Hero data atau Theme hilang!</div>}
      
      {content.TRUST_BAR_TEXT && content.TRUST_STATS && (
        <TrustBar text={content.TRUST_BAR_TEXT} stats={content.TRUST_STATS} />
      )}
      
      {content.SERVICES && content.SERVICE_CARDS && content.THEME && (
        <Services data={content.SERVICES} cards={content.SERVICE_CARDS} contact={content.CONTACT} theme={content.THEME} />
      )}

      {content.WHY_US && content.WHY_US_FEATURES && (
        <WhyChooseUs data={content.WHY_US} features={content.WHY_US_FEATURES} />
      )}
      
      {content.TESTIMONIALS && content.TESTIMONIAL_CARDS && (
        <Testimonials data={content.TESTIMONIALS} cards={content.TESTIMONIAL_CARDS} />
      )}
      
      {content.PRICING && content.PRICING_PACKAGES && (
        <Pricing data={content.PRICING} packages={content.PR_PACKAGES || content.PRICING_PACKAGES} contact={content.CONTACT} />
      )}
      
      {content.FINAL_CTA && content.CONTACT && content.THEME && (
        <FinalCta data={content.FINAL_CTA} contact={content.CONTACT} theme={content.THEME} />
      )}
      
      {content.FOOTER && content.BRAND && (
        <Footer brand={content.BRAND} footer={content.FOOTER} links={content.FOOTER_LINKS || []} contact={content.FOOTER_CONTACT || []} />
      )}
      
      {content.CONTACT?.whatsappNumber && <WhatsAppFloat phone={content.CONTACT.whatsappNumber} />}
    </div>
  );
}
