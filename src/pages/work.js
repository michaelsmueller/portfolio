import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import WorkHead from 'components/head/WorkHead';
import Layout from 'components/Layout';
import ProjectCard from 'components/ProjectCard';
import { WorkTitle } from 'styles/workStyles';

const Work = ({ projects, meta }) => (
  <>
    <WorkHead meta={meta} />
    <Layout>
      <WorkTitle>Work</WorkTitle>
      <>
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
      </>
    </Layout>
  </>
);

export default ({ data }) => {
  const { nodes } = data.allPrismicProject;
  const { siteMetadata } = data.site;
  if (!nodes) return null;
  return <Work projects={nodes} meta={siteMetadata} />;
};

Work.propTypes = {
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
};

export const query = graphql`
  {
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
