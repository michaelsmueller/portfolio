import React from 'react';
import { Link } from 'gatsby';
import Logo from 'components/_ui/Logo';
import { FooterContainer, FooterAuthor } from 'styles/components/footerStyles';

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <Logo />
    </Link>
    <FooterAuthor href="https://www.marguerite.io/?utm_source=prist&utm_medium=footer&utm_campaign=prist_starter">
      © 2021 — Designed & developed by Marguerite Roth
    </FooterAuthor>
  </FooterContainer>
);

export default Footer;
