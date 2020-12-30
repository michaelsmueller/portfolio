import styled from '@emotion/styled';
import colors from 'styles/colors';
import { Link } from 'gatsby';

export const ProjectHeroContainer = styled('div')`
  background: ${colors.grey200};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-top: 2.25em;
  margin-bottom: 3.5em;
  img {
    max-width: 600px;
  }
`;

export const ProjectTitle = styled('div')`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
`;

export const ProjectBody = styled('div')`
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

export const WorkLink = styled(Link)`
  margin-top: 3em;
  display: block;
  text-align: center;
`;
