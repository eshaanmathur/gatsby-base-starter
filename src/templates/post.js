import React from 'react';
import { graphql, Link } from 'gatsby';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const Post = ({ data }) => (
  <Layout title={data.markdownRemark.frontmatter.title}>
    <div>
      <Markdown source={data.markdownRemark.rawMarkdownBody} />
      <Link to="/">Back</Link>
    </div>
  </Layout>
);

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }),
      rawMarkdownBody: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;

export const query = graphql`
  query postQuery($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        title
      }
      rawMarkdownBody
    }
  }
`;
