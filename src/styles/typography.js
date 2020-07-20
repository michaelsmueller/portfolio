import css from '@emotion/css';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const typeStyles = css`
    h1 {
        font-size: 2.8em;
        line-height: 1.45;
        font-weight: 800;

        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 2.25em;
        }

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 2em;
        }
    }

    h2 {
        margin: 3rem 0 1.5rem 0;
        font-size: 1.9em;
        line-height: 1.1;
    }

    h3 {
        line-height: 1.2;
        font-size: 1.5em;
    }

    h5 {
        margin-bottom: 1.45rem;
        font-weight: 500;
        line-height: 20px;
        font-size: 0.95em;
    }

    h6 {
        font-size: 0.9em;
        font-weight: 500;
        margin: 0;
    }

    p {
        line-height: 1.9;
    }

    a {
        text-decoration: none;
        color: ${colors.blue500};

        &:hover {
            cursor: pointer;
            color: ${colors.blue300}
        }
    }

    li {
        line-height: 1.4;
        padding: 5px 0;
    }

    pre {
        padding: 10px 20px;
        color: rgba(255, 255, 255, 0.9);
        background-color: ${colors.grey900};
        line-height: 1.4em;
        font-size: 0.8rem;
    }
`

export default typeStyles;