/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [__dirname+'/views/Dash.html',
  __dirname+'app.js',__dirname+'/views/enter-data.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),],
}

