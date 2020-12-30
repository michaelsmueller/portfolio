import styled from '@emotion/styled';
import dimensions from 'styles/dimensions';

export const AboutContainer = styled('div')`
  padding-top: 1em;
  display: grid;
  grid-template-columns: 8em 1fr 8em;
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr 3fr 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 7em 1fr;
    grid-template-rows: 3em 1fr;
    grid-gap: 2em;
  }
`;

export const AboutLinkContainer = styled('div')`
  padding-top: 1em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`;

export const AboutLink = styled('a')`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: currentColor;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`;

export const AboutBio = styled('div')`
  padding-bottom: 3em;
  max-width: 480px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`;

export const AboutActions = styled('div')`
  padding-top: 1em;
  padding-bottom: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0;
    grid-column: 1 / -1;
    grid-row: 1;
  }
`;
