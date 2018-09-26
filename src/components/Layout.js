import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import reset from '../styles/Reset';
import base from '../styles/Base';
import MainWrapper from '../styles/MainWrapper';
import theme from '../styles/theme';

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

reset();
base();

const Layout = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={SITE_TITLE_QUERY}
      render={data => (
        <MainWrapper>
          <Meta title={`${data.site.siteMetadata.title} | ${title}`} description={data.site.siteMetadata.description} />
          {children}
        </MainWrapper>
      )}
    />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: 'Home',
};

export default Layout;
