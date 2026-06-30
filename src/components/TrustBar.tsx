import { Users, Award, ThumbsUp, Clock } from 'lucide-react';
import { cn } from '@/utils/cn';
import { TRUST_BAR_TEXT, TRUST_STATS } from '@/data/siteContent';

/* ==================== INTERFACES ==================== */

interface TrustBarProps {
  className?: string;
}

/* ==================== COMPONENT ==================== */

const STAT_ICONS = [Users, Award, ThumbsUp, Clock];

export default function TrustBar({ className }: TrustBarProps) {
  return (
    <section className={cn('bg-white py-12 border-b border-gray-100', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">
          {TRUST_BAR_TEXT}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-900 mb-3 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
