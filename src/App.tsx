import { useEffect, useState } from 'react';
import { 
  Navbar, 
  Hero, 
  TrustBar, 
  Services, 
  WhyChooseUs, 
  Testimonials, 
  Pricing, 
  FinalCta, 
  Footer, 
  WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  // 1. Baca niche dari URL (?niche=lori)
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';

  // 2. Pilih data berdasarkan niche (fallback ke aircond)
  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  // 3. (Optional) Log untuk debug di phone
  console.log("Niche Aktif:", nicheQuery);

  return (
    <div className="font-sans antialiased">
      {/* 
        Setiap komponen di bawah menerima data spesifik dari 'content'.
        Pastikan dalam setiap fail komponen (cth: Hero.tsx), 
        anda sudah tukar kepada props-based (seperti yang kita buat tadi).
      */}
      
      <Navbar brand={content.BRAND} items={content.NAV_ITEMS} />
      
      <Hero 
        data={content.HERO} 
        contact={content.CONTACT} 
      />
      
      <TrustBar 
        text={content.TRUST_BAR_TEXT} 
        stats={content.TRUST_STATS} 
      />
      
      <Services 
        data={content.SERVICES} 
        cards={content.SERVICE_CARDS} 
        contact={content.CONTACT}
      />

      <WhyChooseUs 
        data={content.WHY_US} 
        features={content.WHY_US_FEATURES} 
      />
      
      <Testimonials 
        data={content.TESTIMONIALS} 
        cards={content.TESTIMONIAL_CARDS} 
      />
      
      <Pricing 
        data={content.PRICING} 
        packages={content.PRICING_PACKAGES} 
      />
      
      <FinalCta 
        data={content.FINAL_CTA} 
        contact={content.CONTACT} 
      />
      
      <Footer 
        footer={content.FOOTER} 
        links={content.FOOTER_LINKS} 
        contact={content.FOOTER_CONTACT} 
        brand={content.BRAND}
      />
      
      <WhatsAppFloat contact={content.CONTACT} />
    </div>
  );
}
