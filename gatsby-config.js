const { NoUnusedFragmentsRule } = require('gatsby/graphql');

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    title: `Michael Mueller | Web developer & financial advisor`,
    description: `My work portfolio.`,
    author: `Michael Mueller`,
    siteUrl: `https://michaelmueller.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Inter',
              variants: ['400', '500', '600', '700', '800'],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'michael-portfolio',
        linkResolver: () => (post) => `/${post.uid}`,
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
          post: require('./src/schemas/post.json'),
          project: require('./src/schemas/project.json'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `michael-portfolio`,
        short_name: `michael`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
