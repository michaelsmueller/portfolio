import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import ProjectHead from 'components/head/ProjectHead';
import Button from 'components/_ui/Button';
import Layout from 'components/Layout';
import Prism from 'prismjs';
import {
  ProjectHeroContainer,
  ProjectTitle,
  ProjectBody,
  WorkLink,
} from 'styles/templates/projectStyles';

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
      <ProjectHead project={project} meta={meta} />
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
