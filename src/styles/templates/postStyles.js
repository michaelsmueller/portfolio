import styled from '@emotion/styled';
import colors from 'styles/colors';

export const PostHeroContainer = styled('div')`
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3em;

  img {
    max-width: 100%;
  }
`;

export const PostHeroAnnotation = styled('div')`
  padding-top: 0.25em;

  h6 {
    text-align: right;
    color: ${colors.grey700};
    font-weight: 400;
    font-size: 0.85rem;
  }

  a {
    color: currentColor;
  }
`;

export const PostCategory = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: ${colors.grey600};

  h5 {
    margin-top: 0;
    margin-bottom: 1em;
  }
`;

export const PostTitle = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-top: 0;
  }
`;

export const PostBody = styled('div')`
  max-width: 550px;
  margin: 0 auto;

  .block-img {
    margin: 2rem 0;

    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
`;

export const PostMetas = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
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
