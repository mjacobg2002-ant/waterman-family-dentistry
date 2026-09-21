/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Aqua-teal brand family, matching watermandentistry.com (brand accent #21b6a8).
        // Deeper 600/700 shades keep white-on-color buttons + teal-on-cream text
        // accessible; 500 carries the exact vibrant brand aqua for graphic accents.
        evergreen: {
          DEFAULT: '#0f766e', // primary brand + actions (deep aqua teal)
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#21b6a8', // exact Waterman brand aqua teal
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#0f3d3a',
        },
        harbor: {
          DEFAULT: '#1e3a5f', // deep navy, mirrors the office cabinetry
          700: '#1a3252',
          900: '#12233a',
        },
        sage: {
          DEFAULT: '#8aa79a',
          100: '#e7eee9',
          200: '#cfdcd5',
        },
        ivory: '#f8f6f0',
        cream: '#fbfaf5',
        champagne: '#c7a86a', // restrained gold accent (office hardware)
        charcoal: '#2b2f2e',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(18, 35, 58, 0.18)',
        card: '0 8px 30px -16px rgba(18, 35, 58, 0.22)',
        lift: '0 24px 60px -20px rgba(18, 35, 58, 0.28)',
        float: '0 18px 50px -18px rgba(15, 118, 110, 0.35)',
        glow: '0 0 0 1px rgba(33,182,168,0.18), 0 20px 50px -20px rgba(33,182,168,0.45)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '4xl': '2rem',
      },
      maxWidth: {
        container: '1240px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #21b6a8 0%, #0f766e 55%, #0c5a54 100%)',
        'brand-radial':
          'radial-gradient(120% 90% at 85% 0%, rgba(33,182,168,0.16), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(199,168,106,0.10), transparent 60%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
