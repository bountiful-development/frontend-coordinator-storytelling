import React from 'react';
import styled from 'styled-components';
import Icon from '../../../utilities/Icon';
import { ViewButton } from '../../Card/Card';

const Story = () => {
  return (
    <div className="story">
      <PageHeading>Story</PageHeading>
      <CoordinatorName>By: Ryan Walker</CoordinatorName>
      <StoryContent>
        <Icon name="brazil" />
        <StoryText>
          That's a son of a gun of a cloud. We'll paint one happy little tree
          right here. I'm going to mix up a little color. We’ll use Van Dyke
          Brown, Permanent Red, and a little bit of Prussian Blue. Absolutely no
          pressure. You are just a whisper floating across a mountain. In
          painting, you have unlimited power. You have the ability to move
          mountains. We'll lay all these little funky little things in there. It
          is a lot of fun. There comes a nice little fluffer. Everyone is going
          to see things differently - and that's the way it should be.
          Exercising the imagination, experimenting with talents, being
          creative; these things, to me, are truly the windows to your soul.
          That's crazy. Just take out whatever you don't want. It'll change your
          entire perspective. It is a lot of fun. There comes a nice little
          fluffer. Everyone is going to see things differently - and that's the
          way it should be. Exercising the imagination, experimenting with
          talents, being creative; these things, to me, are truly the windows to
          your soul. That's crazy. Just take out whatever you don't want. It'll
          change your entire perspective.
        </StoryText>
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
  }
`;

const StoryText = styled.p`
  margin-bottom: 3rem;
`;

export default Story;
