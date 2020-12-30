import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import PostHead from 'components/head/PostHead';
import Layout from 'components/Layout';
import {
  PostHeroContainer,
  PostHeroAnnotation,
  PostCategory,
  PostTitle,
  PostBody,
  PostMetas,
  PostAuthor,
  PostDate,
} from 'styles/templates/postStyles';

const Post = ({ post, meta }) => (
  <>
    <PostHead post={post} meta={meta} />
    <Layout>
      <PostCategory>{post.post_category.text}</PostCategory>
      <PostTitle>{parse(post.post_title.html)}</PostTitle>
      <PostMetas>
        <PostAuthor>{post.post_author}</PostAuthor>
        <PostDate>{post.post_date}</PostDate>
      </PostMetas>
      {post.post_hero_image && (
        <PostHeroContainer>
          <img src={post.post_hero_image.url} alt="bees" />
          <PostHeroAnnotation>
            {post.post_hero_annotation.text}
          </PostHeroAnnotation>
        </PostHeroContainer>
      )}
      <PostBody>{parse(post.post_body.html)}</PostBody>
    </Layout>
  </>
);

export default ({ data }) => {
  const { prismicPost, site } = data;
  const postContent = prismicPost.data;
  const meta = site.siteMetadata;
  return <Post post={postContent} meta={meta} />;
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  query PostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
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
    site {
      ...SiteInfo
    }
  }
`;
