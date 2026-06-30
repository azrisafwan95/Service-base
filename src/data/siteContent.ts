/* ==================== INTERFACES ==================== */

export interface NavItem {
  label: string;
  sectionId: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  features: string[];
  color: string;
  bgLight: string;
  iconColor: string;
}

export interface WhyUsFeature {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export interface FooterLink {
  label: string;
  sectionId: string;
}

export interface ContactEntry {
  label: string;
  value: string;
}

/* ==================== BRAND CONFIG ==================== */

export const BRAND = {
  name: 'Aircond',
  accent: 'Master',
  tagline: '& Electrical',
  description:
    'Servis aircond & elektrik profesional di Lembah Klang. Berdaftar, berpengalaman dan dipercayai oleh 2,000+ pelanggan.',
};

/* ==================== CONTACT CONFIG ==================== */

export const CONTACT = {
  whatsappNumber: '60123456789',
  whatsappLink: 'https://wa.me/60123456789',
  phoneLink: 'tel:+60123456789',
  phoneDisplay: '+60 12-345 6789',
  email: 'info@aircondmaster.com',
  location: 'Lembah Klang, Selangor',
  hours: 'Isnin - Ahad: 8AM - 9PM',
};

/* ==================== NAVIGATION ==================== */

export const NAV_ITEMS: NavItem[] = [
  { label: 'Servis', sectionId: 'services' },
  { label: 'Kenapa Kami', sectionId: 'why-us' },
  { label: 'Testimoni', sectionId: 'testimonials' },
  { label: 'Harga', sectionId: 'pricing' },
];

/* ==================== TRUST BAR ==================== */

export const TRUST_BAR_TEXT = 'Telah membantu 2,000+ pelanggan di Lembah Klang';

export const TRUST_STATS: TrustStat[] = [
  { value: '2,000+', label: 'Pelanggan Gembira' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '98%', label: 'Kadar Kepuasan' },
  { value: '24 Jam', label: 'Masa Respons' },
];

/* ==================== HERO ==================== */

export const HERO = {
  badge: '#1 Servis Aircond di Lembah Klang',
  headline: 'Servis Aircond',
  headlineAccent: 'Profesional',
  subheadline:
    'Kami selesaikan masalah aircond anda dalam masa 24 jam dengan jaminan 30 hari. Servis berkualiti dengan harga yang telus.',
  primaryCta: 'Tempah Slot Sekarang',
  secondaryCta: 'Lihat Harga',
  rating: '4.9',
  ratingLabel: '/5',
  ratingCount: '2,000+ Pelanggan Gembira',
  floatingBadge1: '30 Hari',
  floatingBadge1Sub: 'Jaminan Servis',
  floatingBadge2: 'Bersijil',
  floatingBadge2Sub: 'Teknisi Profesional',
  visualLabel: '24 Jam',
  visualSub: 'Respons Pantas',
};

/* ==================== SERVICES ==================== */

export const SERVICES = {
  badge: 'Perkhidmatan Kami',
  title: 'Semua Yang Anda',
  titleAccent: 'Perlukan',
  subtitle:
    'Dari basic service hingga pemasangan unit baharu — kami menyediakan semua perkhidmatan aircond & elektrik anda.',
  cta: 'Tempah Sekarang',
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    title: 'Basic Service',
    description: 'Pembersihan filter, fin, dan coil. Cek tekanan freon & prestasi unit.',
    features: ['Cuci Filter & Fin', 'Cek Tekanan Freon', 'Test Prestasi', 'Pembersihan Saluran Air'],
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Chemical Service',
    description: 'Pembersihan mendalam menggunakan bahan kimia profesional untuk hasil optimum.',
    features: ['Pembersihan Mendalam', 'Gunakan Bahan Kimia Pro', 'Cuci Evaporator & Condenser', 'Optimumkan Pendinginan'],
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    title: 'Repair & Installation',
    description: 'Pembetulan kerosakan dan pemasangan unit baharu dengan jaminan berkualiti.',
    features: ['Diagnosa Masalah', 'Tukar Komponen', 'Pemasangan Unit Baharu', 'Jaminan Kerja'],
    color: 'from-emerald-500 to-emerald-600',
    bgLight: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
];

/* ==================== WHY CHOOSE US ==================== */

export const WHY_US = {
  badge: 'Kenapa Pilih Kami?',
  title: 'Sebab Mengapa 2,000+ Pelanggan',
  titleAccent: 'Percaya',
  subtitle:
    'Kami bukan sekadar servis aircond biasa. Kami komited memberikan pengalaman terbaik dari permulaan hingga selesai.',
  checklistHeader: 'Kepuasan Dijamin',
  checklistSub: '100% atau duit anda kembali',
  checklistItems: [
    'Pendaftaran mudah & pantas',
    'Teknisi tiba mengikut masa',
    'Laporan lengkap selepas servis',
    'Susun atur 30 hari jaminan',
  ],
  testimonialText:
    '"Servis memang terbaik! Teknisi sampai tepat pada masa dan kerja dibuat dengan kemas. Highly recommended!"',
  testimonialAuthor: '— Ahmad, Shah Alam',
};

export const WHY_US_FEATURES: WhyUsFeature[] = [
  {
    title: 'Respons Pantas',
    description: 'Kami hubungi anda dalam masa 1 jam dan tiba dalam 24 jam. Tidak perlu menunggu lama.',
  },
  {
    title: 'Teknisi Bersijil',
    description: 'Semua teknisi kami bertauliah dan berpengalaman lebih 5 tahun dalam industri.',
  },
  {
    title: 'Tiada Bayaran Tersembunyi',
    description: 'Harga yang kami sebut adalah harga akhir. Tiada caj tersembunyi atau surprise.',
  },
  {
    title: 'Jaminan 30 Hari',
    description: 'Setiap kerja kami dijamin selama 30 hari. Jika ada masalah, kami uruskan percuma.',
  },
];

/* ==================== TESTIMONIALS ==================== */

export const TESTIMONIALS = {
  badge: 'Testimoni Pelanggan',
  title: 'Apa Kata',
  titleAccent: 'Pelanggan Kami',
  subtitle: 'Ribuan pelanggan telah mempercayai perkhidmatan kami.',
};

export const TESTIMONIAL_CARDS: Testimonial[] = [
  {
    name: 'Azman Ismail',
    location: 'Petaling Jaya',
    rating: 5,
    text: 'Servis memang terbaik! Teknisi datang tepat pada masa dan buat kerja dengan kemas. Aircond sejuk macam baru. Harga pun sangat berpatutan.',
    avatar: 'AZ',
  },
  {
    name: 'Siti Nurhaliza',
    location: 'Shah Alam',
    rating: 5,
    text: 'Sangat puas hati dengan chemical service. Aircond rumah saya yang dah lama tak sejuk, sekarang macam baru beli. Teknisi pun ramah dan profesional.',
    avatar: 'SN',
  },
  {
    name: 'Muhammad Firdaus',
    location: 'Klang',
    rating: 5,
    text: 'Paling suka sebab tiada bayaran tersembunyi. Apa yang sebut harga awal tu memang harga akhir. Jaminan 30 hari pun memberikan rasa selamat.',
    avatar: 'MF',
  },
];

/* ==================== PRICING ==================== */

export const PRICING = {
  badge: 'Harga Telus',
  title: 'Paket &',
  titleAccent: 'Harga Kami',
  subtitle: 'Tiada bayaran tersembunyi. Apa yang anda lihat adalah apa yang anda bayar.',
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    name: 'Basic Service',
    price: '60',
    unit: 'per unit',
    description: 'Pembersihan asas untuk prestasi optimum',
    features: [
      'Cuci filter & fin',
      'Cek tekanan freon',
      'Test prestasi unit',
      'Pembersihan saluran air',
      'Semakan asas elektrik',
    ],
    popular: false,
    cta: 'Pilih Paket Ini',
  },
  {
    name: 'Chemical Service',
    price: '120',
    unit: 'per unit',
    description: 'Pembersihan mendalam untuk hasil terbaik',
    features: [
      'Semua dalam Basic',
      'Pembersihan kimia mendalam',
      'Cuci evaporator & condenser',
      'Optimumkan pendinginan',
      'Semakan komprehensif',
      'Pelaporan prestasi',
    ],
    popular: true,
    cta: 'Paling Popular',
  },
  {
    name: 'Repair & Install',
    price: '150',
    unit: 'permulaan',
    description: 'Pembetulan & pemasangan unit',
    features: [
      'Diagnosa percuma',
      'Tukar komponen (jika perlu)',
      'Pemasangan unit baharu',
      'Peralatan mounting baru',
      'Jaminan 30 hari',
      'Follow-up selepas kerja',
    ],
    popular: false,
    cta: 'Pilih Paket Ini',
  },
];

/* ==================== FINAL CTA ==================== */

export const FINAL_CTA = {
  badge: 'Jaduan Sekarang',
  headline: 'Aircond Anda Tak Sejuk?',
  headlineAccent: 'Jangan Tunggu Lagi!',
  subtitle:
    'Hubungi kami sekarang melalui WhatsApp untuk tempahan pantas. Teknisi kami sedia membantu anda hari ini!',
  primaryCta: 'WhatsApp Kami Sekarang',
  secondaryCta: '+60 12-345 6789',
  note: 'Respons dalam masa 1 jam · Tiada komitmen · Percuma konsultasi',
};

/* ==================== FOOTER ==================== */

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Perkhidmatan', sectionId: 'services' },
  { label: 'Harga', sectionId: 'pricing' },
  { label: 'Testimoni', sectionId: 'testimonials' },
  { label: 'Hubungi', sectionId: '' },
];

export const FOOTER_CONTACT: ContactEntry[] = [
  { label: 'Telefon', value: '+60 12-345 6789' },
  { label: 'Email', value: 'info@aircondmaster.com' },
  { label: 'Lokasi', value: 'Lembah Klang, Selangor' },
  { label: 'Waktu', value: 'Isnin - Ahad: 8AM - 9PM' },
];

export const FOOTER = {
  copyright: '© 2025 AircondMaster. Hak cipta terpelihara.',
  privacyLabel: 'Dasar Privasi',
  termsLabel: 'Terma & Syarat',
};
