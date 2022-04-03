module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1200px',
            // => @media (min-width: 1200px) { ... }
      
            'xl': '1416px',
            // => @media (min-width: 1416px) { ... }
      
            '2xl': '1675',
            // => @media (min-width: 1675px) { ... }
          },
        container: {
            center: true,
            padding: '1rem'
        },
      extend: {},
    },
    plugins: [],
  }