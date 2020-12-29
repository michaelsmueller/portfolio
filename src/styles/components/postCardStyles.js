import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';

export const PostCardContainer = styled(Link)`
  border: 1px solid ${colors.grey200};
  padding: 3em 2.5em 2.25em 2.5em;
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .PostCardAction {
      color: ${colors.blue500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`;

export const PostCategory = styled('h6')`
  font-weight: 600;
  color: ${colors.grey600};
`;

export const PostTitle = styled('h3')`
  margin: 0;
  margin-top: 0.5em;
`;

export const PostMetas = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`;

export const PostAuthor = styled('div')`
  margin: 0;
`;

export const PostDate = styled('div')`
  margin: 0;
`;

export const PostDescription = styled('div')`
  margin-top: 2em;
  margin-bottom: 4em;

  p:last-of-type {
    margin: 0;
  }
`;

export const PostCardAction = styled('div')`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`;
