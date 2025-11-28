import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Earth & Land tones
        'soil': {
          900: '#2C1810',
          800: '#3D2317',
          700: '#4A2C1C',
          600: '#5C3A28',
          500: '#6B4423',
        },
        // Wheat & Golden harvest
        'wheat': {
          100: '#FDF8E8',
          200: '#F9EDCC',
          300: '#F2DDA0',
          400: '#E8C86D',
          500: '#D4A84B',
          600: '#B8862F',
        },
        // Sky & Horizon
        'sky': {
          100: '#E8F4F8',
          200: '#C5E4ED',
          300: '#87CEEB',
          400: '#5DADE2',
          500: '#3498DB',
          600: '#2471A3',
        },
        // Sage & Pasture greens
        'sage': {
          100: '#EDF5E1',
          200: '#D4E7C5',
          300: '#A8D08D',
          400: '#7CB342',
          500: '#558B2F',
          600: '#33691E',
        },
        // Terracotta & Outback
        'terra': {
          100: '#FDEEE8',
          200: '#F5D0C0',
          300: '#E8A87C',
          400: '#D4784A',
          500: '#C45C26',
          600: '#A34516',
        },
        // Warm cream backgrounds
        'cream': {
          50: '#FEFDFB',
          100: '#FBF9F3',
          200: '#F5F0E6',
          300: '#EDE4D3',
        },
      },
      fontFamily: {
        'display': ['Fraunces', 'Georgia', 'serif'],
        'sans': ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sunrise-gradient': 'linear-gradient(180deg, #FDF8E8 0%, #F9EDCC 30%, #E8F4F8 100%)',
        'sunset-gradient': 'linear-gradient(180deg, #FDEEE8 0%, #F5D0C0 50%, #E8C86D 100%)',
        'field-gradient': 'linear-gradient(180deg, #87CEEB 0%, #C5E4ED 20%, #F9EDCC 60%, #D4A84B 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'sway': 'sway 4s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' },
        },
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(180, 134, 47, 0.15)',
        'warm-lg': '0 10px 40px rgba(180, 134, 47, 0.2)',
        'earth': '0 4px 20px rgba(92, 58, 40, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
