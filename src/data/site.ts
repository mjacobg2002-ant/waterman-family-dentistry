/**
 * Central source of truth for all Waterman Family Dentistry business content.
 * Update values here to change them everywhere on the homepage.
 *
 * All facts below are drawn from watermandentistry.com (homepage + contact page,
 * treated as authoritative for NAP per the redesign brief).
 */

/** Toggle the unobtrusive "Homepage Redesign Concept" pill. Set to false for production. */
export const SHOW_CONCEPT_BADGE = true

export const business = {
  name: 'Waterman Family Dentistry',
  doctor: 'Dr. Jennifer Waterman',
  since: 2012,
  tagline: 'Thoughtful Dentistry. Lifelong Relationships.',
  phoneDisplay: '(757) 340-8155',
  phoneHref: 'tel:+17573408155',
  email: 'hello@watermandentistry.com',
  emailHref: 'mailto:hello@watermandentistry.com',
  address: {
    line1: '879 Lynnhaven Parkway, Suite 109',
    city: 'Virginia Beach',
    state: 'VA',
    zip: '23452',
    short: '879 Lynnhaven Pkwy, Ste 109',
  },
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('879 Lynnhaven Parkway Suite 109, Virginia Beach, VA 23452'),
  mapEmbed:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('879 Lynnhaven Parkway Suite 109, Virginia Beach, VA 23452') +
    '&output=embed',
}

/** Office hours, used for display and the live open/closed indicator. */
export const hours = [
  { day: 'Monday', open: '9:00 AM', close: '5:00 PM', openHour: 9, closeHour: 17 },
  { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM', openHour: 9, closeHour: 17 },
  { day: 'Wednesday', open: '9:00 AM', close: '5:00 PM', openHour: 9, closeHour: 17 },
  { day: 'Thursday', open: '9:00 AM', close: '5:00 PM', openHour: 9, closeHour: 17 },
  { day: 'Friday', open: 'Closed', close: '', openHour: null, closeHour: null },
  { day: 'Saturday', open: 'Closed', close: '', openHour: null, closeHour: null },
  { day: 'Sunday', open: 'Closed', close: '', openHour: null, closeHour: null },
] as const

/**
 * External links point at the corresponding live pages so nothing is broken.
 * Centralized here so they can be re-pointed after launch.
 */
export const externalLinks = {
  requestAppointment: 'https://www.watermandentistry.com/contact-us/',
  about: 'https://www.watermandentistry.com/about/',
  services: 'https://www.watermandentistry.com/services/',
  familyDentistry: 'https://www.watermandentistry.com/family-dentistry/',
  cosmeticDentistry: 'https://www.watermandentistry.com/cosmetic-dentistry/',
  restorativeDentistry: 'https://www.watermandentistry.com/restorative-dentistry/',
  emergency: 'https://www.watermandentistry.com/emergency-dental-service/',
  patientInfo: 'https://www.watermandentistry.com/patient-info/',
  financing: 'https://www.watermandentistry.com/financing-options/',
  testimonials: 'https://www.watermandentistry.com/testimonials/',
}

/** In-page anchor navigation for this homepage shell. */
export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#doctor' },
  { label: 'Services', href: '#services' },
  { label: 'Patient Info', href: '#experience' },
  { label: 'Contact', href: '#location' },
]

export const trustPoints = [
  'Serving Virginia Beach Since 2012',
  'Gentle, Personalized Care',
  'Comprehensive Family Dentistry',
  'Led by a West Point Graduate & Army Veteran',
]

export const heroTrustPoints = [
  'Family Dentistry',
  'Cosmetic Care',
  'Restorative Dentistry',
  'Emergency Appointments',
]

export const services = [
  {
    icon: 'Users',
    title: 'Family Dentistry',
    description:
      'Comprehensive care for every age, so your whole family can share one trusted dental home.',
    href: externalLinks.familyDentistry,
  },
  {
    icon: 'Sparkles',
    title: 'Dental Exams & Cleanings',
    description:
      'Thorough, unhurried preventive visits that keep your smile healthy and catch concerns early.',
    href: externalLinks.services,
  },
  {
    icon: 'Smile',
    title: 'Cosmetic Dentistry',
    description:
      'Refined, natural-looking enhancements designed around your goals and your everyday confidence.',
    href: externalLinks.cosmeticDentistry,
  },
  {
    icon: 'ShieldCheck',
    title: 'Restorative Dentistry',
    description:
      'Crowns, bridges, and dentures that rebuild comfort, function, and the strength of your bite.',
    href: externalLinks.restorativeDentistry,
  },
  {
    icon: 'Anchor',
    title: 'Dental Implant Restorations',
    description:
      'Secure, lasting restorations that restore missing teeth and the confidence to eat and smile.',
    href: externalLinks.restorativeDentistry,
  },
  {
    icon: 'Stethoscope',
    title: 'Emergency Dental Care',
    description:
      'Prompt, reassuring attention when dental pain or an unexpected problem cannot wait.',
    href: externalLinks.emergency,
  },
] as const

export const experiencePoints = [
  {
    icon: 'HeartHandshake',
    title: 'A Genuinely Welcoming Team',
    description:
      'From your first call to your final visit, our team takes the time to know you by name.',
  },
  {
    icon: 'MessageCircle',
    title: 'Clear, Honest Explanations',
    description:
      'We walk you through every recommendation so you always understand your options.',
  },
  {
    icon: 'Target',
    title: 'Care Around Your Goals',
    description:
      'Your priorities guide our recommendations — never a one-size-fits-all treatment plan.',
  },
  {
    icon: 'Leaf',
    title: 'Gentle, Attentive Comfort',
    description:
      'Precise, effective care delivered in a calm, unhurried and reassuring manner.',
  },
] as const

/** Testimonials as published on watermandentistry.com. */
export const testimonials = [
  {
    name: 'Kim M.',
    quote:
      'I can’t say enough good things about the Waterman Dentistry Practice. The staff is amazing — professional, friendly, personable and kind. Dr. Waterman has truly created a culture of authentic caring and dedication to excellence.',
  },
  {
    name: 'Sarah S.',
    quote:
      'Dr. Waterman’s been the best dentist I’ve had, and we’ve lived many places. She’s not only very intelligent and knowledgeable in her craft, but also caring and gentle. I’m so blessed to have found her!',
  },
  {
    name: 'Jeffrey Y.',
    quote:
      'Dr. Waterman and her staff are fantastic. The moment you walk into the practice you feel like family.',
  },
] as const

/** Office gallery images (all first-party, downloaded from watermandentistry.com). */
export const gallery = [
  {
    src: '/images/waterman/waterman-waiting-room.jpg',
    alt: 'Bright reception and waiting room at Waterman Family Dentistry with comfortable seating',
    span: 'large' as const,
  },
  {
    src: '/images/waterman/waterman-reception.webp',
    alt: 'Front desk and check-in area with a view to the street entrance',
    span: 'small' as const,
  },
  {
    src: '/images/waterman/waterman-consult-room.webp',
    alt: 'Quiet private consultation room with a round table and seating',
    span: 'small' as const,
  },
  {
    src: '/images/waterman/waterman-hallway.jpg',
    alt: 'Clean treatment-room hallway with frosted sliding doors and coastal artwork',
    span: 'small' as const,
  },
  {
    src: '/images/waterman/waterman-sterilization.webp',
    alt: 'Dedicated sterilization station with modern instrument-cleaning equipment',
    span: 'small' as const,
  },
]
