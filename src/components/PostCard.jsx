import React from 'react';
import Moment from 'react-moment';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import {
  PostCardContainer,
  PostCategory,
  PostTitle,
  PostMetas,
  PostAuthor,
  PostDate,
  PostDescription,
  PostCardAction,
} from 'styles/components/postCardStyles';

const PostCard = ({ author, category, date, title, description, uid }) => (
  <PostCardContainer className="BlogPostCard" to={`/blog/${uid}`}>
    <PostCategory>{category[0].text}</PostCategory>
    <PostTitle>{title[0].text}</PostTitle>
    <PostDescription>{RichText.render(description)}</PostDescription>
    <PostCardAction className="PostCardAction">
      Read more <span>&#8594;</span>
    </PostCardAction>
    <PostMetas>
      <PostAuthor>{author}</PostAuthor>
      <PostDate>
        <Moment format="MMMM D, YYYY">{date}</Moment>
      </PostDate>
    </PostMetas>
  </PostCardContainer>
);

export default PostCard;

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
};
