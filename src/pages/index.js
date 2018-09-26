import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout title="Example with Typography.js">
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quo eveniet deleniti nihil esse ullam quia velit
        fugit blanditiis repellat expedita optio nesciunt fugiat, fuga nobis porro repellendus odit vero.
      </p>
      <Link to="/page/hello">Hello Page</Link>
    </div>
  </Layout>
);
