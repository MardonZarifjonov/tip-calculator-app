/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'hsl(173, 62%, 76%)',
        'dark-cyan-1': 'hsl(183, 100%, 15%)',
        'dark-cyan-2': 'hsl(186, 14%, 43%)',
        'dark-cyan-3': 'hsl(184, 14%, 56%)',
        'light-cyan-1': 'hsl(185, 41%, 84%)',
        'light-cyan-2': 'hsl(189, 41%, 97%)',
        'label-color': '#616F6D',
        'error-color': '#FB7272',
        white: 'hsl(0, 0%, 100%)',
      },
      height: {
        'element-desktop': '56px',
        'element-mobile': '42px',
      },
      maxWidth: {
        tip: '120px',
      },
      gridTemplateColumns: {
        'tips-desktop': 'repeat(3, minmax(0, 120px))',
        'tips-mobile': 'repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
