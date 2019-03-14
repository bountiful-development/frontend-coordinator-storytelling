import React from 'react';
import styled from 'styled-components';
import Icon from '../../../utilities/Icon';
import { ViewButton } from '../../Card/Card';

const Story = ({ story }) => {
  return (
    <div className="story">
      <PageHeading>{story.story_title}</PageHeading>
      <CoordinatorName>By: Ryan Walker</CoordinatorName>
      <StoryContent>
        <Icon name={story.story_country} />
        <StoryText>{story.story_description}</StoryText>
        <ViewButton>Donate</ViewButton>
      </StoryContent>
    </div>
  );
};

const PageHeading = styled.h2`
  font-size: 2.8rem;
  margin: 3rem 0 0;
  font-weight: 700;
`;

const CoordinatorName = styled.div`
  margin-bottom: 3rem;
`;

const StoryContent = styled.div`
  svg {
    float: left;
    margin-right: 2rem;
    margin-bottom: 2rem;
    fill: #39393a;
  }
`;

const StoryText = styled.p`
  margin-bottom: 3rem;
`;

export default Story;
