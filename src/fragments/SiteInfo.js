import { graphql } from 'gatsby';

export const siteInfo = graphql`
  fragment SiteInfo on Site {
    siteMetadata {
      title
      description
      author
    }
  }
`;
