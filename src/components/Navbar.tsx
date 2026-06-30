import { useState, useEffect } from 'react';
import { Phone, Menu, X, ThermometerSnowflake } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BRAND, CONTACT, NAV_ITEMS } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface NavbarProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

export default function Navbar({ className }: NavbarProps) {
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

  const textColor = isScrolled ? 'text-gray-600' : 'text-blue-100';
  const brandColor = isScrolled ? 'text-blue-900' : 'text-white';
  const taglineColor = isScrolled ? 'text-gray-500' : 'text-blue-200';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center shadow-lg">
              <ThermometerSnowflake className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className={cn('text-xl font-bold tracking-tight', brandColor)}>
                {BRAND.name}<span className="text-orange-500">{BRAND.accent}</span>
              </span>
              <p className={cn('text-[10px] font-medium tracking-wider uppercase -mt-1', taglineColor)}>
                {BRAND.tagline}
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-orange-500',
                  textColor
                )}
              >
                {item.label}
              </button>
            ))}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn('w-6 h-6', isScrolled ? 'text-gray-800' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', isScrolled ? 'text-gray-800' : 'text-white')} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-orange-500 text-white px-4 py-3 rounded-xl font-semibold mt-2"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
