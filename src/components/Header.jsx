import React from 'react'
import { Link } from 'gatsby'
import Logo from 'components/_ui/Logo'
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  HeaderLinks,
} from 'styles/components/headerStyles'

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/work">
          Work
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
        </Link>
        <a
          href="mailto:hello@michaelmueller.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
