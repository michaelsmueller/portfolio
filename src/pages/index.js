import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import parse from 'html-react-parser';
import IndexHead from 'components/head/IndexHead';
import Button from 'components/_ui/Button';
import About from 'components/About';
import Layout from 'components/Layout';
import ProjectCard from 'components/ProjectCard';
import { Hero, Section, WorkAction } from 'styles/indexStyles';

const RenderBody = ({ home, projects, meta }) => (
  <>
    <IndexHead meta={meta} />
    <Hero>
      <>{parse(home.data.hero_title.html)}</>
      <a href={home.data.hero_button_link.url}>
        <Button>{parse(home.data.hero_button_text.html)}</Button>
      </a>
    </Hero>
    <Section>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.data.project_category}
          title={project.data.project_title}
          description={project.data.project_preview_description}
          thumbnail={project.data.project_preview_thumbnail}
          uid={project.uid}
        />
      ))}
      <WorkAction to={'/work'}>
        See more work <span>&#8594;</span>
      </WorkAction>
    </Section>
    <Section>
      {parse(home.data.about_title.html)}
      <About bio={home.data.about_bio} socialLinks={home.data.about_links} />
    </Section>
  </>
);

export default ({ data }) => {
  // Required check for no data being returned
  const doc = data.allPrismicHomepage.nodes.slice(0, 1).pop();
  const { nodes } = data.allPrismicProject;
  const { siteMetadata } = data.site;
  if (!doc || !nodes) return null;
  return (
    <Layout>
      <RenderBody home={doc} projects={nodes} meta={siteMetadata} />
    </Layout>
  );
};

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  {
    allPrismicHomepage {
      nodes {
        data {
          hero_title {
            html
          }
          hero_button_text {
            html
          }
          hero_button_link {
            url
          }
          about_title {
            html
          }
          about_bio {
            html
          }
          about_links {
            about_link {
              raw
            }
          }
        }
      }
    }
    allPrismicProject(sort: { order: DESC, fields: data___project_post_date }) {
      nodes {
        uid
        data {
          project_title {
            text
          }
          project_preview_description {
            html
          }
          project_preview_thumbnail {
            url
          }
          project_category {
            text
          }
          project_post_date
        }
      }
    }
    site {
      ...SiteInfo
    }
  }
`;
