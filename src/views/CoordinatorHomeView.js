import React, { Component } from 'react';
import styled from 'styled-components';
import CoordinatorCards from '../components/Card/CoordinatorCards';
import Navigation from '../components/Navigation/Navigation';

class CoordinatorHomeView extends Component {
  state = {};

  componentDidMount() {
    if (this.props.userstories.length <= 0) {
      let curid = localStorage.getItem('curid');
      console.log(curid);
      this.props.getUserStories(curid);
    }
  }

  getStoryThenRedirect = id => {
    const redirectTo = () => this.props.history.push(`/coordinator/edit-story`);
    this.props.getStory(id, redirectTo);
  };

  render() {
    return (
      <StyledCoordinatorHomeView>
        <Navigation />
        <Container>
          <PageHeading>My Stories</PageHeading>
          <CoordinatorCards
            userstories={this.props.userstories}
            deleteStory={this.props.deleteStory}
            getStory={this.getStoryThenRedirect}
          />
        </Container>
      </StyledCoordinatorHomeView>
    );
  }
}

const StyledCoordinatorHomeView = styled.div`
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

export default CoordinatorHomeView;
