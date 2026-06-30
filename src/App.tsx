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
  WhatsAppFloat,
} from './components';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FinalCta />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
