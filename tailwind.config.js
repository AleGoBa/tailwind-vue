/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        'boston-blue': {
          '50': '#f3f7fc',
          '100': '#e6eff8',
          '200': '#c8ddef',
          '300': '#98c0e1',
          '400': '#619fcf',
          '500': '#4a8fc4',
          '600': '#2c699d',
          '700': '#25547f',
          '800': '#22486a',
          '900': '#213d59',
          '950': '#16273b',
      },
      }
    },
  },
  plugins: [],
};
