/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2FF',
          500: '#3B82F6',
          600: '#2563EB',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        construction: {
          gold: '#D97706',
          green: '#065F46',
          gray: '#6B7280',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
    },
  },
  plugins: [],
};