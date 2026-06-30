import { ThermometerSnowflake, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BRAND, FOOTER, FOOTER_LINKS, FOOTER_CONTACT } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface FooterProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

const CONTACT_ICONS = [Phone, Mail, MapPin, Clock];

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-gray-950 text-gray-400 py-16', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                <ThermometerSnowflake className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                {BRAND.name}<span className="text-orange-500">{BRAND.accent}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">{BRAND.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pautan Pantas</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.sectionId}>
                  <button
                    type="button"
                    onClick={() => {
                      if (!link.sectionId) return;
                      const el = document.getElementById(link.sectionId);
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm hover:text-orange-500 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              {FOOTER_CONTACT.map((item, i) => {
                const Icon = CONTACT_ICONS[i];
                return (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Icon className="w-4 h-4 text-orange-500" />
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">{FOOTER.copyright}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:text-orange-500 transition-colors">
              {FOOTER.privacyLabel}
            </a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-sm hover:text-orange-500 transition-colors">
              {FOOTER.termsLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
