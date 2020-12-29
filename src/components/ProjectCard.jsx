import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
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
      <ProjectCardCategory>{category.text}</ProjectCardCategory>
      <ProjectCardTitle>{title.text}</ProjectCardTitle>
      <ProjectCardBlurb>{parse(description.html)}</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <img src={thumbnail.url} alt={title.text} />
    </ProjectCardImageContainer>
  </ProjectCardContainer>
);

export default ProjectCard;

ProjectCard.propTypes = {
  category: PropTypes.object.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
};
