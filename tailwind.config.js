/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        newulet: ['Newulet', 'sans-serif'],
      },
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
      },
    },
    
    colors: {
      transparent:'transparent',
      current: 'currentcolor',
      'dro_green': '#03C988',
      'dro_red': '#E84D4D',
      'dro_yellow': '#FFF200',
      'dro_gray': '#D9D9D9',
      'dro_black': '#000',
      'dro_white': '#ffff'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      
      },
    },
  },
  variants:{},
  plugins: [ ["@babel/plugin-transform-react-jsx", {
    "throwIfNamespace": false
  }]],
}
