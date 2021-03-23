module.exports = {
   siteMetadata: {
    title: "yanquielwebdev",
    descripton: "web dev portfolio",
    copyright: "This website is copyright 2021 yanquielwebdev"   
  }, 
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "c4d37e86e26cb3c510a090dcdb25e8",
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "#44198",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/code.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
