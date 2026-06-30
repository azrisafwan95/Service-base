import { Navbar, Hero, Services, Footer, WhatsAppFloat } from './components';
import { ALL_PRESETS } from './data/presets/index';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const niche = queryParams.get('niche') || 'aircond';
  const content = ALL_PRESETS[niche] || ALL_PRESETS.aircond;

  return (
    <div className="antialiased font-sans">
      <Navbar brand={content.BRAND} contact={content.CONTACT} items={content.NAV_ITEMS} theme={content.THEME} />
      <Hero data={content.HERO} contact={content.CONTACT} theme={content.THEME} />
      <Services data={content.SERVICES} cards={content.SERVICE_CARDS} contact={content.CONTACT} theme={content.THEME} />
      <Footer brand={content.BRAND} footer={content.FOOTER} contact={content.CONTACT} theme={content.THEME} />
      <WhatsAppFloat phone={content.CONTACT.whatsappNumber} />
    </div>
  );
}
