import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from 'images/favicon-32x32.png';

const BlogHead = ({ meta }) => (
  <Helmet
    title={`Blog | Michael Mueller, web developer & financial advisor`}
    titleTemplate={`%s | Blog | Michael Mueller, web developer & financial advisor`}
    link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
    meta={[
      {
        name: `description`,
        content: meta.description,
      },
      {
        property: `og:title`,
        content: `Blog | Michael Mueller, web developer & financial advisor`,
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

export default BlogHead;
