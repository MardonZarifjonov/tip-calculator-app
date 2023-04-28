/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'screen-sm': '375px',
        'screen-lg': '1440px',
      },
      colors: {
        'primary-color': 'hsl(172, 67%, 45%)',
        'dark-cyan-1': 'hsl(183, 100%, 15%)',
        'dark-cyan-2': 'hsl(186, 14%, 43%)',
        'light-cyan-1': 'hsl(185, 41%, 84%)',
        'light-cyan-2': 'hsl(189, 41%, 97%)',
        'label-color': '#616F6D',
        'error-color': '#FB7272',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
