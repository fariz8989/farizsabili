/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/Home/Home.js','./src/components/Navbar/Navbar.js','./src/components/Carousel/Carousel.js',"./src/public/images/images.js",'./src/components/Techstack/Tech.js','./src/components/Social/Social.js'],
  theme: {
    extend: {
      colors:{
        'navy':"#0a192f",
        'light-navy':'#112240',
        'lightest-navy':'#233554',
        'cyan':'#00CB82'
      },
      fontFamily:{
        'mono':[ 'PT Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
