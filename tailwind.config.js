/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'Quicksand', 'system-ui', 'sans-serif'],
        body: ['Quicksand', 'system-ui', 'sans-serif'],
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
      },
      colors: {
        cream: '#FFF8EC',
        sand: '#FBEFD4',
        islam: {
          green: '#3F8E5C',
          gold: '#D4A24C',
          sky: '#7CC0E8',
          night: '#1F2A4A',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
};
