import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import ProjectHead from 'components/head/ProjectHead';
import Button from 'components/_ui/Button';
import Layout from 'components/Layout';
import Prism from 'prismjs';
import {
  ProjectHeroContainer,
  ProjectTitle,
  ProjectBody,
  WorkLink,
  RichText,
} from 'styles/templates/projectStyles';

const Body = ({ project }) => {
  if (!project?.body || !project.body?.length) return null;
  else
    return project.body.map((slice, index) => {
      const { slice_type, primary } = slice;
      if (slice_type.includes('code')) {
        const lang = slice_type.slice(5);
        return (
          <pre key={index}>
            <code className={`language-${lang}`}>{primary.code_text.text}</code>
          </pre>
        );
      } else if (slice_type === 'text')
        return <RichText key={index}>{parse(primary.rich_text.html)}</RichText>;
      else return null;
    });
};

const Project = ({ project, meta }) => {
  useEffect(() => Prism.highlightAll());
  return (
    <>
      <ProjectHead project={project} meta={meta} />
      <Layout>
        <ProjectTitle>{parse(project.project_title.html)}</ProjectTitle>
        {project.project_hero_image && (
          <ProjectHeroContainer>
            <img
              src={project.project_hero_image.url}
              alt={project.project_hero_image.alt}
            />
          </ProjectHeroContainer>
        )}
        <ProjectBody>
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
  const { prismicProject, site } = data;
  const projectContent = prismicProject.data;
  const meta = site.siteMetadata;
  return <Project project={projectContent} meta={meta} />;
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        project_title {
          html
          text
        }
        project_hero_image {
          url
          alt
        }
        body {
          __typename
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
                text
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
