import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import * as Icons from 'lucide-react'; // Baris ini dipisahkan
import { cn } from '@/utils/cn';

export default function Navbar({ brand, contact, items, theme }: { brand: any, contact: any, items: any[], theme: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Logic Icon Logo Dinamik
  const LogoIcon = (Icons as any)[brand.iconName] || Icons.Zap;

  const isDark = !isScrolled;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-lg", theme.iconBg)}>
              <LogoIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <span className={cn('text-xl font-bold block leading-none', isScrolled ? 'text-gray-900' : 'text-white')}>
                {brand.name}<span className={theme.textAccent}>{brand.accent}</span>
              </span>
              <p className={cn('text-[10px] uppercase tracking-widest font-bold', isScrolled ? 'text-gray-400' : 'text-white/60')}>
                {brand.tagline}
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={cn('text-sm font-semibold transition-colors hover:opacity-70', isScrolled ? 'text-gray-600' : 'text-white')}
              >
                {item.label}
              </button>
            ))}
            <a
              href={contact.whatsappLink}
              className={cn("px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all", theme.button)}
            >
              <Phone className="w-4 h-4" />
              Hubungi
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-2 shadow-xl">
          {items.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className="block w-full text-left px-4 py-3 text-gray-700 font-bold hover:bg-gray-50 rounded-lg"
            >
              {item.label}
            </button>
          ))}
          <a href={contact.whatsappLink} className={cn("block w-full text-center py-4 rounded-xl font-bold mt-4", theme.button)}>
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}
