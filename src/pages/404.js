import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout title="Not Found">
    <div className="Not__Found">
      <h1>404 NOT FOUND</h1>
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
