import React, { Component } from 'react';
import styled from 'styled-components';
import CoordinatorCards from '../components/Card/CoordinatorCards';
import Navigation from '../components/Navigation/Navigation';

class CoordinatorHomeView extends Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (!token) {
      return this.props.history.push('/login');
    }

    // if (this.props.userstories.length <= 0) {
    let curid = localStorage.getItem('curid');
    this.props.getUserStories(curid);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.userstories.length !== prevProps.userstories.length) {
  //     console.log('updating');
  //     let curid = localStorage.getItem('curid');
  //     this.props.getUserStories(curid);
  //   }
  // }

  getStoryThenRedirect = id => {
    const redirectTo = () => this.props.history.push(`/coordinator/edit-story`);
    this.props.getStory(id, redirectTo);
  };

  deleteStoryWithToken = id => {
    const jwt = localStorage.getItem('token');
    let curid = localStorage.getItem('curid');
    const updatePage = () => this.props.getUserStories(curid);
    this.props.deleteStory(id, jwt, updatePage);
  };

  render() {
    return (
      <StyledCoordinatorHomeView>
        <Navigation {...this.props} />
        <Container>
          <PageHeading>My Stories</PageHeading>
          <CoordinatorCards
            userstories={this.props.userstories}
            deleteStory={this.deleteStoryWithToken}
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
