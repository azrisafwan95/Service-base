import { 
  Navbar, Hero, TrustBar, Services, WhyChooseUs, 
  Testimonials, Pricing, FinalCta, Footer, WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';
  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  if (!content) return <div className="p-20 text-center">Data tidak dijumpai.</div>;

  return (
    <div className="font-sans antialiased">
      {/* Guna optional chaining (?.) dan short-circuit (&&) untuk keselamatan */}
      
      {content.BRAND && (
        <Navbar brand={content.BRAND} items={content.NAV_ITEMS || []} />
      )}
      
      {content.HERO && (
        <Hero data={content.HERO} contact={content.CONTACT} />
      )}
      
      {content.TRUST_BAR_TEXT && (
        <TrustBar text={content.TRUST_BAR_TEXT} stats={content.TRUST_STATS || []} />
      )}
      
      {content.SERVICES && (
        <Services data={content.SERVICES} cards={content.SERVICE_CARDS || []} contact={content.CONTACT} />
      )}

      {content.WHY_US && (
        <WhyChooseUs data={content.WHY_US} features={content.WHY_US_FEATURES || []} />
      )}
      
      {content.TESTIMONIALS && (
        <Testimonials data={content.TESTIMONIALS} cards={content.TESTIMONIAL_CARDS || []} />
      )}
      
      {content.PRICING && (
        <Pricing data={content.PRICING} packages={content.PRICING_PACKAGES || []} />
      )}
      
      {content.FINAL_CTA && (
        <FinalCta data={content.FINAL_CTA} contact={content.CONTACT} />
      )}
      
      {content.FOOTER && (
        <Footer 
          footer={content.FOOTER} 
          links={content.FOOTER_LINKS || []} 
          contact={content.FOOTER_CONTACT || []} 
          brand={content.BRAND}
        />
      )}
      
      {content.CONTACT && <WhatsAppFloat phone={content.CONTACT.whatsappNumber} />}
    </div>
  );
}
