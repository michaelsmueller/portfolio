import React from 'react';
import { Helmet } from 'react-helmet';

const PostHead = ({ post, meta }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={`${post.post_title.text} | Michael Mueller, web / blockchain & financial advisor`}
    titleTemplate={`%s | ${meta.title}`}
    meta={[
      {
        name: `description`,
        content: meta.description,
      },
      {
        property: `og:title`,
        content: `${post.post_title.text} | Michael Mueller, web / blockchain & financial advisor`,
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

export default PostHead;
