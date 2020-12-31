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
    // {
    //   resolve: `gatsby-plugin-google-fonts-v2`,
    //   options: {
    //     fonts: [
    //       {
    //         family: 'Inter',
    //         variable: true,
    //         weights: ['400..800'],
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ['https://fonts.gstatic.com'],
        /* Font listener interval (in ms). Default is 300ms. Recommended: >=300ms */
        interval: 300,
        /* Font listener timeout value (in ms). Default is 30s (30000ms). Listener will no longer check for loaded fonts after timeout, fonts will still be loaded and displayed, but without handling FOUT. */
        timeout: 30000,
        web: [
          {
            name: 'Inter',
            file:
              'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
          },
        ],
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    `gatsby-plugin-no-javascript`,
  ],
};
