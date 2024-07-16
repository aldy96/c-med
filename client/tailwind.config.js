module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        day: {
          background: '#1d4ed8',  // White background for day mode
          text: '#ffffff'         // Black text for day mode
        
        },
        night: {
          background: '#1a202c',  // Dark background for night mode
          text: '#ffffff'         // White text for night mode
        }
      }
    }
  },
  plugins: []
};
