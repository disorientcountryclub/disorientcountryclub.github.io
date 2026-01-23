/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/countryclub/layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'electric-pink': '#ff1493',
        'cyber-blue': '#00ffff',
        'neon-purple': '#b026ff',
        'hot-magenta': '#ff00ff',
        'deep-violet': '#4a0e78',
        'midnight': '#0a0015',
      },
      fontFamily: {
        'display': ['Orbitron', 'monospace'],
        'body': ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
