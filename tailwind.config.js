/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c1c1c',
        secondary: '#FFFFFF',
        light_white: '#f0f8ff',
        portfolio: '#FF3422',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      keyframes: {
        wiggleX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        wiggleX: 'wiggleX 0.5s ease-in-out infinite',
        pulse_oneTime: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
