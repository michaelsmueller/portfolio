import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Button from 'components/_ui/Button';
import Layout from 'components/Layout';
import Prism from 'prismjs';
import {
  ProjectHeroContainer,
  ProjectTitle,
  ProjectBody,
  WorkLink,
} from 'styles/templates/projectStyles';

const Header = ({ project, meta }) => {
  return (
    <Helmet
      title={`${project.project_title[0].text} | Michael Mueller, web developer & financial advisor`}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `${project.project_title[0].text} | Michael Mueller, web developer & financial advisor`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
  );
};

const Body = ({ project }) => {
  if (!project?.body || !project.body?.length) return null;
  else
    return project.body.map((slice, index) => {
      const { type, primary } = slice;
      if (type.includes('code')) {
        const lang = type.slice(5);
        return (
          <pre key={index}>
            <code className={`language-${lang}`}>
              {RichText.asText(primary.code_text)}
            </code>
          </pre>
        );
      } else if (type === 'text')
        return <RichText key={index} render={primary.rich_text} />;
      else return null;
    });
};

const Project = ({ project, meta }) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
      <Header project={project} meta={meta} />
      <Layout>
        <ProjectTitle>{RichText.render(project.project_title)}</ProjectTitle>
        {project.project_hero_image && (
          <ProjectHeroContainer>
            <img src={project.project_hero_image.url} alt="project hero" />
          </ProjectHeroContainer>
        )}
        <ProjectBody>
          {/* <RichText render={project.project_description} /> */}
          <Body project={project} />
          <WorkLink to={'/work'}>
            <Button className="Button--secondary">See other work</Button>
          </WorkLink>
        </ProjectBody>
      </Layout>
    </>
  );
};

export default ({ data }) => {
  const { prismic, site } = data;
  const projectContent = prismic.allProjects.edges[0].node;
  const meta = site.siteMetadata;
  return <Project project={projectContent} meta={meta} />;
};

Project.propTypes = { project: PropTypes.object.isRequired };

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            project_hero_image
            body {
              ... on PRISMIC_ProjectBodyCode_javascript {
                type
                primary {
                  code_text
                }
              }
              ... on PRISMIC_ProjectBodyCode_jsx {
                type
                primary {
                  code_text
                }
              }
              ... on PRISMIC_ProjectBodyCode_css {
                type
                primary {
                  code_text
                }
              }
              ... on PRISMIC_ProjectBodyCode_html {
                type
                primary {
                  code_text
                }
              }
              ... on PRISMIC_ProjectBodyText {
                type
                primary {
                  rich_text
                }
              }
              __typename
            }
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
