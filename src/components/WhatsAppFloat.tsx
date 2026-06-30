import { MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { CONTACT } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface WhatsAppFloatProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

export default function WhatsAppFloat({ className }: WhatsAppFloatProps) {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white',
        'w-14 h-14 rounded-full shadow-2xl shadow-green-500/30',
        'flex items-center justify-center',
        'transition-all duration-300 hover:scale-110 animate-pulse-slow',
        className
      )}
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
