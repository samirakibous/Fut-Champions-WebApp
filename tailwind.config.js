module.exports = {
    content: [
      "./src/*/.{html,js}",
    ],
    theme: {
      extend: {
        
        screens: {
          'sm-plus': '124px', // Point de rupture à 122px
        },
      },
    },

    plugins: [],
  };