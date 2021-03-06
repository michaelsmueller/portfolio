import styled from '@emotion/styled';
import colors from 'styles/colors';

export const FooterContainer = styled('div')`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 200px;
  }
`;

export const FooterAuthor = styled('a')`
  font-size: 0.75em;
  color: ${colors.grey800};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
