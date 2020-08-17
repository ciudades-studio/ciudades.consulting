import React from 'react';  
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

const Noscript = props => {
  return <noscript dangerouslySetInnerHTML={{ __html: props.children }} />;
};

const Layout = ({ data, children }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Noscript>
      <iframe
        title="googletagmanager"
        src="https://www.googletagmanager.com/ns.html?id=GTM-M44KBB3"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      />
    </Noscript>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
