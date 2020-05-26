module.exports = {
  siteMetadata: {
    title: `Rakesh Patel - UI Developer`,
    description: `Showcase of Rakesh Patel's projects over the years.`,
    author: `@rakesh_r_patel`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-stylelint`,
    {
      resolve: "gatsby-plugin-stylelint",
      options: { files: ["**/*.{js,jsx}"] },
    },
  ],
};
