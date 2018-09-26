import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout title="Not Found">
    <div>
      <h1>404 NOT FOUND</h1>
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
);
// sljndls

export default NotFoundPage;
