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
      ...SiteInfo
    }
  }
`;
