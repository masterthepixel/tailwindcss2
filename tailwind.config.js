module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['group-focus', 'active'],
    borderColor: ['group-focus'],
    boxShadow: ['group-focus'],
    opacity: ['group-focus'],
    textColor: ['group-focus', 'active'],
    textDecoration: ['group-focus'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
