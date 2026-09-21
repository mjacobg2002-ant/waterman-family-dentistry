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
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
