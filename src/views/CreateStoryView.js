import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import StoryForm from '../components/Coordinator/StoryForm';

class CreateStoryView extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      return this.props.history.push('/login');
    }
  }

  addStoryWithRedirect = datapack => {
    this.props.addStory(datapack);
    this.props.history.push('/coordinator');
  };

  render() {
    return (
      <StyledCreateStoryView>
        <Navigation {...this.props} />
        <Container>
          <PageHeading>Add Story</PageHeading>
          <StoryForm addStory={this.addStoryWithRedirect} />
        </Container>
      </StyledCreateStoryView>
    );
  }
}

const StyledCreateStoryView = styled.div`
  background: #fafafa;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
`;

const PageHeading = styled.h2`
  font-size: 2.8rem;
  margin: 3rem 0;
  font-weight: 700;
`;

export default CreateStoryView;
