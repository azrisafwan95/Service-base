import { MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function WhatsAppFloat({ phone }: { phone: string }) {
  if (!phone) return null;

  const whatsappLink = `https://wa.me/${phone}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
      )}
      aria-label="WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Ada soalan? Hubungi kami!
      </div>
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
