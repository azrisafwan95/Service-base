import { 
  Navbar, Hero, TrustBar, Services, WhyChooseUs, 
  Testimonials, Pricing, FinalCta, Footer, WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';
  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  return (
    <div className="font-sans antialiased">
      <Navbar brand={content.BRAND} contact={content.CONTACT} items={content.NAV_ITEMS} theme={content.THEME} />
      <Hero data={content.HERO} contact={content.CONTACT} theme={content.THEME} />
      <TrustBar text={content.TRUST_BAR_TEXT} stats={content.TRUST_STATS} />
      <Services data={content.SERVICES} cards={content.SERVICE_CARDS} contact={content.CONTACT} theme={content.THEME} />
      <WhyChooseUs data={content.WHY_US} features={content.WHY_US_FEATURES} />
      <Testimonials data={content.TESTIMONIALS} cards={content.TESTIMONIAL_CARDS} />
      <Pricing data={content.PRICING} packages={content.PRICING_PACKAGES} contact={content.CONTACT} />
      <FinalCta data={content.FINAL_CTA} contact={content.CONTACT} theme={content.THEME} />
      <Footer brand={content.BRAND} footer={content.FOOTER} links={content.FOOTER_LINKS} contact={content.FOOTER_CONTACT} />
      <WhatsAppFloat phone={content.CONTACT.whatsappNumber} />
    </div>
  );
}
