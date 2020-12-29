import React from 'react';
import Button from 'components/_ui/Button';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import {
  AboutContainer,
  AboutLinkContainer,
  AboutLink,
  AboutBio,
  AboutActions,
} from 'styles/components/aboutStyles';

const About = ({ bio, socialLinks }) => (
  <AboutContainer>
    <AboutLinkContainer>
      {socialLinks.map((social, i) => (
        <AboutLink
          key={i}
          href={social.about_link[0].spans[0].data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.about_link[0].text}
          <span>&#8594;</span>
        </AboutLink>
      ))}
    </AboutLinkContainer>
    <AboutBio>{RichText.render(bio)}</AboutBio>
    <AboutActions>
      <a
        href="mailto:hello@michaelmueller.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="Button--secondary">Email me</Button>
      </a>
    </AboutActions>
  </AboutContainer>
);

export default About;

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
};
