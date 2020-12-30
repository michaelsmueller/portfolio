import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogHead from 'components/head/BlogHead';
import Layout from 'components/Layout';
import PostCard from 'components/PostCard';
import { BlogTitle, BlogGrid } from 'styles/blogStyles';

const Blog = ({ posts, meta }) => (
  <>
    <BlogHead meta={meta} />
    <Layout>
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {posts.map((post, i) => (
          <PostCard
            key={i}
            author={post.data.post_author}
            category={post.data.post_category}
            title={post.data.post_title}
            date={post.data.post_date}
            description={post.data.post_preview_description}
            uid={post.uid}
          />
        ))}
      </BlogGrid>
    </Layout>
  </>
);

export default ({ data }) => {
  const { nodes } = data.allPrismicPost;
  const { siteMetadata } = data.site;
  if (!nodes) return null;
  return <Blog posts={nodes} meta={siteMetadata} />;
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    allPrismicPost(sort: { order: DESC, fields: data___post_date }) {
      nodes {
        uid
        data {
          post_title {
            html
            text
          }
          post_hero_image {
            url
          }
          post_hero_annotation {
            text
          }
          post_date
          post_category {
            text
          }
          post_body {
            html
          }
          post_preview_description {
            html
          }
          post_author
        }
      }
    }
    site {
      ...SiteInfo
    }
  }
`;
