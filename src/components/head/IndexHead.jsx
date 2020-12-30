import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from 'images/favicon-32x32.png';

const IndexHead = ({ meta }) => (
  <Helmet
    title={meta.title}
    titleTemplate={`%s | ${meta.title}`}
    link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
    meta={[
      {
        name: `description`,
        content: meta.description,
      },
      {
        property: `og:title`,
        content: meta.title,
      },
      {
        property: `og:description`,
        content: meta.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: meta.author,
      },
      {
        name: `twitter:title`,
        content: meta.title,
      },
      {
        name: `twitter:description`,
        content: meta.description,
      },
    ].concat(meta)}
  />
);

export default IndexHead;
