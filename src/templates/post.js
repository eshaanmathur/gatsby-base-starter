import React from 'react';
import { graphql } from 'gatsby';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const Post = ({ data }) => (
  <Layout>
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Markdown source={data.markdownRemark.rawMarkdownBody} />
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
