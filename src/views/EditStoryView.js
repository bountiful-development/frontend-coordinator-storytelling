import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import StoryForm from '../components/Coordinator/StoryForm';

class EditStoryView extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      return this.props.history.push('/login');
    }
  }

  editStoryWithRedirect = (id, datapack) => {
    this.props.editStory(id, datapack);
    this.props.history.push('/coordinator');
  };

  render() {
    return (
      <StyledEditStoryView>
        <Navigation />
        <Container>
          <PageHeading>Edit Story</PageHeading>
          <StoryForm
            story={this.props.story}
            editStory={this.editStoryWithRedirect}
          />
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
