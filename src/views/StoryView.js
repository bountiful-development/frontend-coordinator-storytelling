import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';

import Story from '../components/Donor/Story/Story';
import StorySidebar from '../components/Donor/Story/StorySidebar';

class StoryView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getStory(id);
  }
  render() {
    return (
      <StyledStoryView>
        <Navigation />
        <Container>
          <Story story={this.props.story} />
          <StorySidebar story={this.props.story} />
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

export default StoryView;
