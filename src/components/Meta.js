import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Meta = ({ title, description }) => (
  <Helmet
    title={title}
    meta={[
      {
        name: 'decription',
        content: description,
      },
    ]}
  >
    <html lang="en" />
  </Helmet>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Meta;
