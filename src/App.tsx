import { useEffect, useState } from 'react';
import { 
  Navbar, Hero, TrustBar, Services, WhyChooseUs, 
  Testimonials, Pricing, FinalCta, Footer, WhatsAppFloat 
} from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const nicheQuery = queryParams.get('niche') || 'aircond';

  // Pilih data berdasarkan URL
  const content = ALL_PRESETS[nicheQuery] || ALL_PRESETS.aircond;

  return (
    <div className="font-sans antialiased">
      {/* 
         PENTING: Semua komponen mesti terima props 'content' 
         supaya mereka tak guna data hardcoded lama.
      */}
      <Navbar brand={content.BRAND} />
      
      <Hero 
        data={content.HERO} 
        contact={content.CONTACT} 
      />

      {/* 
         Untuk sementara, kalau komponen lain belum siap terima props, 
         anda mungkin nampak bahagian bawah masih Aircond. 
         Fokus pada Hero dulu untuk test URL ?niche=lori 
      */}
      
      <TrustBar data={content.TRUST_BAR_TEXT} />
      <Services data={content.SERVICES} cards={content.SERVICE_CARDS} />
      <Footer brand={content.BRAND} contact={content.CONTACT} />
      <WhatsAppFloat contact={content.CONTACT} />
    </div>
  );
}
