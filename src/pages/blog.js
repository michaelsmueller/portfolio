import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import PostCard from 'components/PostCard';
import { BlogTitle, BlogGrid } from 'styles/blogStyles';

const Blog = ({ posts, meta }) => (
  <>
    <Helmet
      title={`Blog | Michael Mueller, web developer & financial advisor`}
      titleTemplate={`%s | Blog | Michael Mueller, web developer & financial advisor`}
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
    <Layout>
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {posts.map((post, i) => (
          <PostCard
            key={i}
            author={post.node.post_author}
            category={post.node.post_category}
            title={post.node.post_title}
            date={post.node.post_date}
            description={post.node.post_preview_description}
            uid={post.node._meta.uid}
          />
        ))}
      </BlogGrid>
    </Layout>
  </>
);

export default ({ data }) => {
  const posts = data.prismic.allPosts.edges;
  const meta = data.site.siteMetadata;
  if (!posts) return null;

  return <Blog posts={posts} meta={meta} />;
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    prismic {
      allPosts(sortBy: post_date_DESC) {
        edges {
          node {
            post_title
            post_date
            post_category
            post_preview_description
            post_author
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
