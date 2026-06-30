import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import * as Icons from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Navbar({ brand, contact, items, theme }: { brand: any, contact: any, items: any[], theme: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LogoIcon = (Icons as any)[brand.iconName] || Icons.Zap;

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4')}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", theme.iconBg)}>
            <LogoIcon className="w-6 h-6 text-white" />
          </div>
          <span className={cn('text-xl font-bold', isScrolled ? 'text-blue-900' : 'text-white')}>
            {brand.name}<span className={theme.textAccent}>{brand.accent}</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {items?.map((item: any) => (
            <button key={item.sectionId} className={cn('text-sm font-semibold', isScrolled ? 'text-gray-600' : 'text-white')}>{item.label}</button>
          ))}
          <a href={contact.whatsappLink} className={cn("px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2", theme.button)}>
            <Phone size={16} /> Hubungi
          </a>
        </div>
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>
    </nav>
  );
}
