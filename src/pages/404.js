import React from 'react';
import { Layout, SEO } from 'components/common';
import { Error } from 'components/error';

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Error />
  </Layout>
);
