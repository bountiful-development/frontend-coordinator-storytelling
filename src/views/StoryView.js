import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../utilities/Icon';
import Navigation from '../components/Navigation/Navigation';
import { Card, ViewButton } from '../components/Card/Card';

class StoryView extends Component {
  state = {};
  render() {
    return (
      <StyledStoryView>
        <Navigation />
        <Container>
          <div className="story">
            <PageHeading>Story</PageHeading>
            <CoordinatorName>By: Ryan Walker</CoordinatorName>
            <StoryContent>
              <Icon name="brazil" />
              <StoryText>
                That's a son of a gun of a cloud. We'll paint one happy little
                tree right here. I'm going to mix up a little color. We’ll use
                Van Dyke Brown, Permanent Red, and a little bit of Prussian
                Blue. Absolutely no pressure. You are just a whisper floating
                across a mountain. In painting, you have unlimited power. You
                have the ability to move mountains. We'll lay all these little
                funky little things in there. It is a lot of fun. There comes a
                nice little fluffer. Everyone is going to see things differently
                - and that's the way it should be. Exercising the imagination,
                experimenting with talents, being creative; these things, to me,
                are truly the windows to your soul. That's crazy. Just take out
                whatever you don't want. It'll change your entire perspective.
                It is a lot of fun. There comes a nice little fluffer. Everyone
                is going to see things differently - and that's the way it
                should be. Exercising the imagination, experimenting with
                talents, being creative; these things, to me, are truly the
                windows to your soul. That's crazy. Just take out whatever you
                don't want. It'll change your entire perspective.
              </StoryText>
              <ViewButton>Donate</ViewButton>
            </StoryContent>
          </div>
          <div className="sidebar">
            <h4>Other Posts about Brazil</h4>
            <div className="card-container">
              <SideBarCard>
                <h3>Title</h3>
                <p>This is an except of text etc etc etc etc</p>
              </SideBarCard>
              <SideBarCard>
                <h3>Title</h3>
                <p>This is an except of text etc etc etc etc</p>
              </SideBarCard>
              <SideBarCard>
                <h3>Title</h3>
                <p>This is an except of text etc etc etc etc</p>
              </SideBarCard>
            </div>
          </div>
        </Container>
      </StyledStoryView>
    );
  }
}

const StyledStoryView = styled.div`
  background: #fafafa;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .story {
    width: 60%;
  }
  .sidebar {
    margin-top: 5rem;
    width: 30%;
    h4 {
      font-weight: 700;
      margin-bottom: 3rem;
      text-transform: uppercase;
      font-size: 1.8rem;
    }
  }
`;

const PageHeading = styled.h2`
  font-size: 2.8rem;
  margin: 3rem 0 0;
  font-weight: 700;
`;

const CoordinatorName = styled.div`
  margin-bottom: 3rem;
`;

const StoryContent = styled.div`
  /* display: flex; */
  /* width: 60%; */
  svg {
    float: left;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
`;

const StoryText = styled.p`
  margin-bottom: 3rem;
`;

const SideBarCard = styled(Card)`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background: #fff;
  &:nth-child(even) {
    background: #fff;
  }
  h3 {
    margin-bottom: 1rem;
    text-align: left;
  }
  p {
    margin-bottom: 0;
  }
`;

export default StoryView;
