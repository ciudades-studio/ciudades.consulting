import React from 'react';
import Box from 'components/box';
import Layout from 'components/layout';
// eslint-disable-next-line
const notFoundMessage = "All roads lead to Rome. We'll eventually get there, just not yet.";

const NotFound = () => (
  <Layout>
    <Box>{notFoundMessage}</Box>
  </Layout>
);

export default NotFound;
