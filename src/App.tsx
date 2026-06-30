import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  Navbar, Hero, TrustBar, Services, WhyChooseUs, 
  Testimonials, Pricing, FinalCta, Footer, WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets'; // Anda kena buat fail ni dulu

export default function App() {
  // 1. Ambil niche dari URL
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';

  // 2. Pilih data (fallback ke aircond kalau tak jumpa)
  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  return (
    <HelmetProvider>
      <div className="font-sans antialiased">
        {/* === PROFESSIONAL TOUCH: DYNAMIC META TAGS === */}
        <Helmet>
          <title>{content.BRAND.name} {content.BRAND.accent} - {content.BRAND.tagline}</title>
          <meta name="description" content={content.BRAND.description} />
          
          {/* Preview WhatsApp / Social Media */}
          <meta property="og:title" content={`${content.BRAND.name} ${content.BRAND.accent}`} />
          <meta property="og:description" content={content.BRAND.description} />
          <meta property="og:image" content={content.HERO.ogImage || '/default-preview.jpg'} />
          <meta property="og:url" content={window.location.href} />
        </Helmet>

        {/* === KOMPONEN DENGAN PROPS === */}
        {/* Kita hantar 'content' masuk ke dalam setiap komponen */}
        
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

        <WhyChooseUs data={content.WHY_US} features={content.WHY_US_FEATURES} />
        
        <Testimonials data={content.TESTIMONIALS} cards={content.TESTIMONIAL_CARDS} />
        
        <Pricing data={content.PRICING} packages={content.PRICING_PACKAGES} />
        
        <FinalCta data={content.FINAL_CTA} contact={content.CONTACT} />
        
        <Footer 
          footer={content.FOOTER} 
          links={content.FOOTER_LINKS} 
          contact={content.FOOTER_CONTACT} 
          brand={content.BRAND}
        />
        
        <WhatsAppFloat phone={content.CONTACT.whatsappNumber} />
      </div>
    </HelmetProvider>
  );
}
