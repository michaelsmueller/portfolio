import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
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

const Post = ({ post, meta }) => {
  return (
    <>
      <PostHead post={post} meta={meta} />
      <Layout>
        <PostCategory>{RichText.render(post.post_category)}</PostCategory>
        <PostTitle>{RichText.render(post.post_title)}</PostTitle>
        <PostMetas>
          <PostAuthor>{post.post_author}</PostAuthor>
          <PostDate>
            <Moment format="MMMM D, YYYY">{post.post_date}</Moment>
          </PostDate>
        </PostMetas>
        {post.post_hero_image && (
          <PostHeroContainer>
            <img src={post.post_hero_image.url} alt="bees" />
            <PostHeroAnnotation>
              {RichText.render(post.post_hero_annotation)}
            </PostHeroAnnotation>
          </PostHeroContainer>
        )}
        <PostBody>{RichText.render(post.post_body)}</PostBody>
      </Layout>
    </>
  );
};

export default ({ data }) => {
  const postContent = data.prismic.allPosts.edges[0].node;
  const meta = data.site.siteMetadata;
  return <Post post={postContent} meta={meta} />;
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  query PostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            post_title
            post_hero_image
            post_hero_annotation
            post_date
            post_category
            post_body
            post_author
            post_preview_description
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
