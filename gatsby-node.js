const path = require('path');

const blogPostTemplate = path.resolve(`src/templates/post.js`);

const markdownQuery = `
    query markdownQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
`;

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(markdownQuery);
  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.edges.forEach(edge => {
    actions.createPage({
      path: `${edge.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {},
    });
  });
};
