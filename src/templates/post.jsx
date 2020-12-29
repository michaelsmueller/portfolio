import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
// import { graphql } from 'gatsby';
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
  const postContent = data.allPrismicPost.edges[0].node;
  const meta = data.site.siteMetadata;
  return <Post post={postContent} meta={meta} />;
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

// export const query = graphql`
//   {
//     allPrismicPost(filter: { uid: uid }) {
//       edges {
//         node {
//           uid
//           data {
//             post_title {
//               text
//             }
//             post_hero_image {
//               url
//             }
//             post_hero_annotation {
//               text
//             }
//             post_date
//             post_category {
//               text
//             }
//             post_body {
//               html
//             }
//             post_preview_description {
//               text
//             }
//             post_author
//           }
//         }
//       }
//     }
//     site {
//       ...SiteInfo
//     }
//   }
// `;
