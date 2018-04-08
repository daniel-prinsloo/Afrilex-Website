module.exports = {
	pathPrefix: `/prototype`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
	`gatsby-plugin-netlify-cms`,
	`gatsby-plugin-react-helmet`,
	`gatsby-plugin-catch-links`,
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			path: `${__dirname}/src/pages`,
			name: 'pages',
		}
	},
	`gatsby-transformer-remark`,
  ],
};
