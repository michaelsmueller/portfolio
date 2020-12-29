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
            category={project.node.project_category}
            title={project.node.project_title}
            description={project.node.project_preview_description}
            thumbnail={project.node.project_preview_thumbnail}
            uid={project.node._meta.uid}
          />
        ))}
      </>
    </Layout>
  </>
);

export default ({ data }) => {
  const projects = data.prismic.allProjects.edges;
  const meta = data.site.siteMetadata;
  if (!projects) return null;

  return <Work projects={projects} meta={meta} />;
};

Work.propTypes = {
  projects: PropTypes.array.isRequired,
};

export const query = graphql`
  {
    prismic {
      allProjects(sortBy: project_post_date_DESC) {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
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
