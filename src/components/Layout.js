import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Meta from './Meta';
import '../sass/reset.scss';
import '../sass/base.scss';

const SITE_TITLE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={SITE_TITLE_QUERY}
    render={data => (
      <div className="Main__Wrapper">
        <Meta title={data.site.siteMetadata.title} description={data.site.siteMetadata.title} />
        {children}
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
