/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Derived from the Waterman logomark (green sun over blue wave) and the
        // navy + warm-neutral office interior.
        evergreen: {
          DEFAULT: '#1d5c4a', // primary brand + actions
          50: '#eef6f2',
          100: '#d6eae2',
          200: '#b3d4c6',
          500: '#25715a',
          600: '#1d5c4a',
          700: '#164838',
          800: '#123a2d',
          900: '#0e2e24',
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
