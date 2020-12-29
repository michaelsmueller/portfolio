import React from 'react';
import { RichText } from 'prismic-reactjs';
import PropTypes from 'prop-types';
import {
  ProjectCardContainer,
  ProjectCardContent,
  ProjectCardCategory,
  ProjectCardTitle,
  ProjectCardBlurb,
  ProjectCardAction,
  ProjectCardImageContainer,
} from 'styles/components/projectCardStyles';

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
  <ProjectCardContainer to={`/work/${uid}`}>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category[0].text}</ProjectCardCategory>
      <ProjectCardTitle>{title[0].text}</ProjectCardTitle>
      <ProjectCardBlurb>{RichText.render(description)}</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <img src={thumbnail.url} alt={title[0].text} />
    </ProjectCardImageContainer>
  </ProjectCardContainer>
);

export default ProjectCard;

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
};
