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
        'funds-india': "url('/assets/app-background.png')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      keyframes: {
        pulse: {
          from: {opacity: 0.05},
          "50%": {opacity: 0.15},
          to: {opacity: 0.05},
        }
      },
    },
  },
  plugins: [],
}
