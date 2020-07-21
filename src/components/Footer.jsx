import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import Logo from 'components/_ui/Logo';

const FooterContainer = styled('div')`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg { max-width: 200px }
`;

const FooterAuthor = styled('a')`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

    &:hover { color: ${colors.blue900} }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`;

const Footer = () => (
    <FooterContainer>
        <Link to='/'><Logo /></Link>
        <FooterAuthor href='https://www.marguerite.io/?utm_source=prist&utm_medium=footer&utm_campaign=prist_starter'>
            © 2020 — Designed & developed by Marguerite Roth
        </FooterAuthor>
    </FooterContainer>
);

export default Footer;
