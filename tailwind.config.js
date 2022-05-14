module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      scale: {
        20: '0.5',
        30: '0.75',
        50: '0.5',
        100: '1.0',
        175: '1.75',
        200: '2.00',
      },
    },
  },
  plugins: [],
};
