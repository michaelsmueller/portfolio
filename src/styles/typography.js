import { css } from '@emotion/react';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const typeStyles = css`
  h1 {
    font-size: 2.8em;
    line-height: 1.45;
    font-weight: 800;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    line-height: 1.2;
    font-size: 1.5em;
  }

  h5 {
    margin-bottom: 1.45rem;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.95em;
  }

  p {
    line-height: 1.9;
  }

  a {
    text-decoration: none;
    color: ${colors.blue600};

    &:hover {
      cursor: pointer;
      color: ${colors.blue300};
    }
  }

  li {
    line-height: 1.9;
    padding: 5px 0;
  }

  pre,
  code {
    font-size: 0.7rem !important;
    line-height: 1.1rem !important;
  }

  .code-toolbar {
    margin-bottom: 2em;
  }
`;

export default typeStyles;
