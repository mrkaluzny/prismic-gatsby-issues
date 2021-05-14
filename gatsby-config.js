const tailwind = require("tailwindcss")
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src"),
        "~": path.join(__dirname),
        styles: path.join(__dirname, "src/styles"),
        img: path.join(__dirname, "static/img"),
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "test-salt",
        schemas: {
          page: require("./custom_types/page.json"),
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
