module.exports = {
  siteMetadata: {
    title: `Edith Labs`,
    description: `Stuff about Edith labs`,
    author: `Kevin Arifin`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145675331-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          once: true, // Defines if animation needs to be launched once
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        pedantic: false,
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: '_blank',
              rel: "nofollow"
            },
          },
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              useFootnoteMarkerText: false // Defaults to false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://gmail.us3.list-manage.com/subscribe/post?u=be923548dcbeefc0055295a56&amp;id=77ed274972', // add your MC list endpoint here; see instructions below
      },
    },
  ],
}
