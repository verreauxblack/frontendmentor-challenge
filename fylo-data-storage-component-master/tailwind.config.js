module.exports = {
  purge: [
    '/public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mobile': "url('./images/bg-mobile.png')",
        'desktop': "url('./images/bg-desktop.png')",
       }),
       colors:{
         'v-d-blue':"hsl(229, 57%, 11%)",
         'gray-blue':"#1E2C69"
       },
       borderRadius: {
         'large':"80px"
       },
       width: {
         '38':'9.5rem'
       },
       margin: {
        sm: '8px',
        md: '16px',
        lg: '22px',
        xl: '108px',
       },
       fontFamily: {
         'Raleway': ['Raleway', 'sans-serif']
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
