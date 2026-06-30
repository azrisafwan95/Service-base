import { useState, useEffect } from 'react';
import { Menu, X, Phone, * as Icons } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Navbar({ brand, contact, items }: { brand: any, contact: any, items: any[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Icon Logo Dinamik
  const LogoIcon = (Icons as any)[brand.iconName] || Icons.Zap;

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all', isScrolled ? 'bg-white shadow-lg' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center">
             <LogoIcon className="w-6 h-6 text-white" />
          </div>
          <span className={cn('text-xl font-bold', isScrolled ? 'text-blue-900' : 'text-white')}>
            {brand.name}<span className="text-orange-500">{brand.accent}</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <button key={item.sectionId} className={cn('text-sm font-medium', isScrolled ? 'text-gray-600' : 'text-blue-100')}>
              {item.label}
            </button>
          ))}
          <a href={contact.whatsappLink} className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2">
            <Phone className="w-4 h-4" /> Hubungi
          </a>
        </div>
      </div>
    </nav>
  );
}
