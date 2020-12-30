import React from 'react';
import { ButtonContainer } from 'styles/_ui/buttonStyles';

const Button = ({ children, onClick, ...props }) => (
  <ButtonContainer onClick={onClick} {...props}>
    {children}
  </ButtonContainer>
);

export default Button;
