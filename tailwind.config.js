/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
    },
    darkMode: 'class',
    colors: {
      dark: {
        50: '#1f2937',
        100: '#111827',
        150: '#000000',
      },
      light: {
        50: '#f9fafb',
        100: '#f4f5f7',
        150: '#e5e7eb',
        200: '#d2d6dc',
        250: '#9fa6b2',
        300: '#6b7280',
        450: '#4b5563',
        500: '#374151',
      },
      yellows: {
        50: "#cfe71e"
      },
      blue: {
        50: '#2d69e1',
        100: "#528cff",
        150: "#0f2a60",
      },
      gradientDark: {
        50: "#4C1D95",
        100: "#C53030",
        150: "#7C3AED"
      },
      gradienLight: {
        50: "#FCD34D",
        100: "#75E7FF",
        150: "#AB83FF"
      },
      gradientSoft: {
        50: "#3B82F6",
        100: "#9333EA",
        150: "#EF4444"
      },
      green: {
        50: "#45f721"
      },
      purple: {
        50: "#572eb7"
      },
      
    },
  },
  plugins: [],
}
