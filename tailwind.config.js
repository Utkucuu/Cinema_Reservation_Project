/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assest/**/*.{html,js}"],
  theme: {
    fontFamily: {
      imbPlex: ['IBM Plex Serif', "serif"],
      open: ['Open Sans', "sans-serif"],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },




    extend: {
      colors: {
        "film-lightBlue": "#00D1FF"
      },
    },
  },
  plugins: [],
}
