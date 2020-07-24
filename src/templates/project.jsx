import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import { Link, graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import Button from 'components/_ui/Button';
import Layout from 'components/Layout';

// import htmlSerializer from 'services/html-serializer';
import Prism from 'prismjs';
// Prism.hooks.add('before-sanity-check', function (env) {
//     env.code = env.element.innerText;
// });

const ProjectHeroContainer = styled('div')`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;
    margin-bottom: 3.5em;

    img {
        max-width: 600px;
    }
`;

const ProjectTitle = styled('div') `
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
`;

const ProjectBody = styled('div')`
    max-width: 550px;
    margin: 0 auto;

    .block-img {
        margin: 2rem 0;

        img {
            max-width: 100%;
            display: block;
            margin: 0 auto;
        }
    }
`;

const WorkLink = styled(Link)`
    margin-top: 3em;
    display: block;
    text-align: center;
`;

const Project = ({ project, meta }) => {
    useEffect(() => { Prism.highlightAll() });
    return (
        <>
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
            <Layout>
                <ProjectTitle>
                    {RichText.render(project.project_title)}
                </ProjectTitle>
                {project.project_hero_image && (
                    <ProjectHeroContainer>
                        <img src={project.project_hero_image.url} alt='bees' />
                    </ProjectHeroContainer>
                )}
                <ProjectBody>
                    {/* <RichText render={project.project_description} htmlSerializer={htmlSerializer} /> */}
                    {RichText.render(project.project_description)}
                    <pre>
                        <code class='language-js'>
                            {RichText.asText(project.project_description_test)}
                        </code>
                    </pre>
                    <WorkLink to={'/work'}>
                        <Button className='Button--secondary'>
                            See other work
                        </Button>
                    </WorkLink>
                </ProjectBody>
            </Layout>
        </>
    )
};

export default ({ data }) => {
    const projectContent = data.prismic.allProjects.edges[0].node;
    const meta = data.site.siteMetadata;
    return (
        <Project project={projectContent} meta={meta}/>
    )
};

Project.propTypes = {
    project: PropTypes.object.isRequired,
};

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
                        project_description
                        project_description_test
                        body {
                            ... on PRISMIC_ProjectBodyCode_slice_in_project {
                              type
                              fields {
                                repeatable_code_slice
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
