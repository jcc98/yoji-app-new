module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: {
        "wallpaper": "url('/images/kanjiwp.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ]
}
