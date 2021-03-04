module.exports = {
  siteMetadata: {
    title: `Wahid M. Farid`,
    description: `Full-stack developer based in Egypt. Get in touch to see how I can help you achieve your goals`,
    author: `Wahid Farid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1F2937`,
        theme_color: `#1F2937`,
        display: `minimal-ui`,
        icon: `src/images/wahid.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-ts-config`,
    `gatsby-plugin-postcss`
  ],
}
