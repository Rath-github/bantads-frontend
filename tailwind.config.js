/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
                  sans: ['Poppins', 'sans-serif'], // Adiciona Poppins como a primeira escolha e, em seguida, fallback para uma fonte sans-serif genérica
    },},
  },
  plugins: [],
}