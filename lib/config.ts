export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  available: boolean;
}

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span: string; // Tailwind grid span class
}

export const GYM_CONFIG = {
  name: "LEGENDS FITNESS CENTRE",
  subName: "UNISEX GYM",
  logo: "/images/logo.jpg",
  tagline: "FORGE YOUR STRONGEST SELF",
  shortDescription: "A high-performance unisex arena engineered for relentless discipline, cutting-edge strength equipment, and transformative athletic conditioning.",
  
  // Contact & Location
  address: "LEGENDS FITNESS CENTRE GYM, Main Arena Highway Road",
  phone: "+91 870 043 4450",
  whatsapp: "918700434450", // Pure numbers without '+' for wa.me links
  email: "connect@legendsfitness.gym",
  openingHours: "Mon - Sat: 5:00 AM - 11:00 PM | Sun: Closed",
  
  // Google Maps
  mapEmbedUrl: "https://maps.google.com/maps?q=28.6821036,77.5029707(LEGENDS%20FITNESS%20CENTRE%20GYM)&t=&z=16&ie=UTF8&iwloc=B&output=embed",
  mapDirectionsUrl: "https://maps.app.goo.gl/azc84kzYwWKyEaVB8",
  
  // Membership Pricing (EXACT: ₹1,399 / MONTH)
  monthlyMembership: 1399,
  currencySymbol: "₹",
  membershipFeatures: [
    "Unlimited Full Gym Access",
    "State-of-the-Art Strength & Free Weights Area",
    "Advanced Cardio & Conditioning Suite",
    "Functional Turf & Performance Zone",
    "Luxury Locker, Sauna & Changing Facilities",
    "Complimentary Initial Fitness Assessment",
  ],
  
  // Statistics Counter
  stats: {
    members: "500+",
    equipment: "20+",
    trainers: "5+",
    daysOpen: "6",
  },

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/legends_21_fitness/",
    whatsapp: "https://wa.me/918700434450",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },

  // Facilities Config
  facilities: [
    {
      id: "strength",
      title: "Strength & Power",
      description: "Biometrically aligned heavy plate-loaded machinery and custom power racks built for maximum overload.",
      iconName: "Dumbbell",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      available: true,
    },
    {
      id: "free-weights",
      title: "Free Weight Zone",
      description: "Precision-calibrated steel dumbbells up to 60kg, competition barbells, and solid rubber bumper plates.",
      iconName: "Disc",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
      available: true,
    },
    {
      id: "cardio",
      title: "Cardio Suite",
      description: "Interactive curved treadmills, air bikes, water rowers, and stair climbers with live performance telemetry.",
      iconName: "Activity",
      image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?q=80&w=1200&auto=format&fit=crop",
      available: true,
    },
    {
      id: "functional",
      title: "Functional Turf",
      description: "Prowler sled tracks, battle ropes, plyometric boxes, and kettlebell arrays for high-intensity athletic conditioning.",
      iconName: "Zap",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      available: true,
    },
    {
      id: "personal-training",
      title: "1-on-1 Personal Coaching",
      description: "Customized biomechanical programming, nutrition planning, and dedicated elite coaches for rapid transformation.",
      iconName: "Users",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      available: true,
    },
    {
      id: "lockers",
      title: "Locker & Shower Suite",
      description: "Spacious electronic keycard lockers, rain showers, grooming stations, and post-workout recovery lounges.",
      iconName: "ShieldCheck",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
      available: true,
    },
  ] as FacilityItem[],

  // Trainers Config
  trainers: [
    {
      id: "t1",
      name: "Head Coach",
      role: "Founder & Head Strength Coach",
      specialty: "Bodybuilding & Muscle Hypertrophy",
      experience: "State & National Athlete (#697)",
      image: "/images/trainer-stage.jpg",
    },
    {
      id: "t2",
      name: "Discipline Conditioning",
      role: "Lead Athletic Trainer",
      specialty: "Posterior Chain & Core Discipline",
      experience: "Pro Conditioning",
      image: "/images/trainer-discipline.jpg",
    },
    {
      id: "t3",
      name: "David Chen",
      role: "Biomechanical Specialist",
      specialty: "Rehab & Strength Calibration",
      experience: "8+ Years Exp",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "t4",
      name: "Sarah Jenkins",
      role: "Conditioning Coach",
      specialty: "Endurance & Body Composition",
      experience: "6+ Years Exp",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    },
  ] as TrainerItem[],

  // Editorial Gallery
  gallery: [
    {
      id: "g1",
      title: "Stage Athlete Posing (#697)",
      category: "Bodybuilding Stage",
      image: "/images/trainer-stage.jpg",
      span: "col-span-12 md:col-span-8 row-span-2",
    },
    {
      id: "g2",
      title: "Discipline & Physique Conditioning",
      category: "Mindset",
      image: "/images/trainer-discipline.jpg",
      span: "col-span-12 md:col-span-4 row-span-2",
    },
    {
      id: "g3",
      title: "Functional Turf Track",
      category: "Conditioning",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-12 md:col-span-4 row-span-1",
    },
    {
      id: "g4",
      title: "Night Session Atmosphere",
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-12 md:col-span-4 row-span-1",
    },
    {
      id: "g5",
      title: "Olympic Power Platforms",
      category: "Platforms",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-12 md:col-span-4 row-span-1",
    },
  ] as GalleryItem[],

  // Testimonials (Configurable Placeholders)
  testimonials: [
    {
      id: "tm1",
      name: "Aarav Sharma",
      role: "Member since 2023",
      rating: 5,
      comment: "The atmosphere here is unlike any gym I've trained at. The biomechanics of the equipment and the high-performance culture drive real gains.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "tm2",
      name: "Priya Patel",
      role: "Member since 2024",
      rating: 5,
      comment: "Super premium facilities, immaculate cleanliness, and top-tier coaches who genuinely care about proper form and injury prevention.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: "tm3",
      name: "Rohan Kapoor",
      role: "Member since 2023",
      rating: 5,
      comment: "Best investment in myself. The ₹1,399 monthly membership gives elite value with equipment you won't find at standard commercial gyms.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    },
  ] as TestimonialItem[],
};

/**
  Generates a direct WhatsApp link with pre-filled enquiry text.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultMsg = `Hi! I am interested in the ${GYM_CONFIG.currencySymbol}${GYM_CONFIG.monthlyMembership} monthly membership at ${GYM_CONFIG.name}. I would like to know more.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${GYM_CONFIG.whatsapp}?text=${text}`;
}
