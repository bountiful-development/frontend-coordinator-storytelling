import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import StoryForm from '../components/Coordinator/StoryForm';

class EditStoryView extends Component {
  state = {};
  render() {
    return (
      <StyledEditStoryView>
        <Navigation />
        <Container>
          <PageHeading>Edit Story</PageHeading>
          <StoryForm />
        </Container>
      </StyledEditStoryView>
    );
  }
}

const StyledEditStoryView = styled.div`
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

export default EditStoryView;
