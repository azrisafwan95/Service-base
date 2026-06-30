// App.tsx
// ... import semua komponen ...

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const niche = queryParams.get('niche') || 'aircond';
  const content = ALL_PRESETS[niche] || ALL_PRESETS.aircond;

  return (
    <div className="antialiased">
      <Navbar brand={content.BRAND} contact={content.CONTACT} items={content.NAV_ITEMS} />
      <Hero data={content.HERO} contact={content.CONTACT} />
      <TrustBar text={content.TRUST_BAR_TEXT} stats={content.TRUST_STATS} />
      <Services data={content.SERVICES} cards={content.SERVICE_CARDS} contact={content.CONTACT} />
      <WhyChooseUs data={content.WHY_US} features={content.WHY_US_FEATURES} />
      <Testimonials data={content.TESTIMONIALS} cards={content.TESTIMONIAL_CARDS} />
      <Pricing data={content.PRICING} packages={content.PRICING_PACKAGES} contact={content.CONTACT} />
      <FinalCta data={content.FINAL_CTA} contact={content.CONTACT} />
      <Footer brand={content.BRAND} footer={content.FOOTER} links={content.FOOTER_LINKS} contact={content.FOOTER_CONTACT} />
      <WhatsAppFloat phone={content.CONTACT.whatsappNumber} />
    </div>
  );
}
