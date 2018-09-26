import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  scaleRatio: 2,
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['300', '400', '600', '700'],
    },
  ],
});

export default typography;
