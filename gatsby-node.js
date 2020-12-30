const path = require('path');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await wrapper(
    graphql(`
      {
        allPrismicProject {
          edges {
            node {
              uid
              data {
                project_title {
                  html
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
        allPrismicPost {
          edges {
            node {
              uid
              data {
                post_title {
                  html
                  text
                }
                post_hero_image {
                  url
                }
                post_hero_annotation {
                  text
                }
                post_date
                post_category {
                  text
                }
                post_body {
                  html
                }
                post_preview_description {
                  html
                }
                post_author
              }
            }
          }
        }
      }
    `)
  );

  const projectTemplate = require.resolve('./src/templates/project.jsx');
  const postTemplate = require.resolve('./src/templates/post.jsx');

  const projectsList = result.data.allPrismicProject.edges;
  const postsList = result.data.allPrismicPost.edges;

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      // type: 'Project',
      // match: '/work/:uid',
      path: `/work/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    });
  });

  postsList.forEach(edge => {
    createPage({
      // type: 'Project',
      // match: '/blog/:uid',
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
