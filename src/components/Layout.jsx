import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/react';
import globalStyles from 'styles/global';
import typeStyles from 'styles/typography';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { LayoutContainer } from 'styles/components/layoutStyles';
import 'styles/fonts.scss';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={`${query}`}
    render={data => (
      <LayoutContainer className="div">
        <Global styles={[globalStyles, typeStyles]} />
        <div className="Layout">
          <Header />
          <main className="Layout__content">{children}</main>
          <Footer />
        </div>
      </LayoutContainer>
    )}
  />
);

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
