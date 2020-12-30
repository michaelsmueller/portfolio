import React from 'react';
import Moment from 'react-moment';
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
    <PostCategory>{category.text}</PostCategory>
    <PostTitle>{title.text}</PostTitle>
    <PostDescription>{description.text}</PostDescription>
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
  category: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
};
