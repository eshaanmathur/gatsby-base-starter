const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Site Title',
    description: 'Site description',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data.json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `./src/markdown/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'hello-world',
        short_name: 'hw',
        start_url: '/',
        background_color: '#2196F3',
        theme_color: '#2196F3',
        display: 'minimal-ui',
        // icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
