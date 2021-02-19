import React from 'react';
import { Helmet } from 'react-helmet';

const BlogHead = ({ meta }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={`Blog | Michael Mueller, web / blockchain & financial advisor`}
    titleTemplate={`%s | Blog | Michael Mueller, web / blockchain & financial advisor`}
    meta={[
      {
        name: `description`,
        content: meta.description,
      },
      {
        property: `og:title`,
        content: `Blog | Michael Mueller, web / blockchain & financial advisor`,
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
