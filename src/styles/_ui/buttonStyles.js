import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

export const ButtonContainer = styled('button')`
  padding: 1em 2em;
  background: ${colors.blue700};
  font-weight: 600;
  color: white;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 30px;
  position: relative;
  transition: background 100ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0.8em 1.8em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: linear-gradient(
      135deg,
      ${colors.magenta200} 0%,
      ${colors.purple400} 100%
    );
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    transition: background 100ms ease-in-out;
  }

  &.Button--secondary {
    background: ${colors.blue200};
    color: ${colors.blue700};
    padding: 0.95em 1.8em;
    font-size: 0.95rem;

    &:hover {
      background: ${colors.blue300};
      transition: background 100ms ease-in-out;
    }
  }
`;
