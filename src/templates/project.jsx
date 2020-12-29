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
  console.log('project', project);
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
  console.log('data', data);
  const { prismicProject, site } = data;
  const projectContent = prismicProject.data;
  const meta = site.siteMetadata;
  return <Project project={projectContent} meta={meta} />;
};

Project.propTypes = { project: PropTypes.object.isRequired };

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        project_title {
          text
        }
        project_preview_description {
          text
        }
        project_preview_thumbnail {
          url
        }
        project_category {
          text
        }
        project_post_date
        body {
          ... on PrismicProjectBodyCodeJavascript {
            slice_type
            primary {
              code_text {
                text
              }
            }
          }
          ... on PrismicProjectBodyCodeJsx {
            slice_type
            primary {
              code_text {
                raw
              }
            }
          }
          ... on PrismicProjectBodyCodeCss {
            slice_type
            primary {
              code_text {
                text
              }
            }
          }
          ... on PrismicProjectBodyCodeHtml {
            slice_type
            primary {
              code_text {
                text
              }
            }
          }
          ... on PrismicProjectBodyText {
            slice_type
            primary {
              rich_text {
                html
              }
            }
          }
        }
      }
    }
    site {
      ...SiteInfo
    }
  }
`;
