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
            category={project.node.data.project_category}
            title={project.node.data.project_title}
            description={project.node.data.project_preview_description}
            thumbnail={project.node.data.project_preview_thumbnail}
            uid={project.node.uid}
          />
        ))}
      </>
    </Layout>
  </>
);

export default ({ data }) => {
  const projects = data.allPrismicProject.edges;
  const meta = data.site.siteMetadata;
  if (!projects) return null;
  return <Work projects={projects} meta={meta} />;
};

Work.propTypes = {
  projects: PropTypes.array.isRequired,
};

export const query = graphql`
  {
    allPrismicProject(sort: { order: DESC, fields: data___project_post_date }) {
      edges {
        node {
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
    }
    site {
      ...SiteInfo
    }
  }
`;
