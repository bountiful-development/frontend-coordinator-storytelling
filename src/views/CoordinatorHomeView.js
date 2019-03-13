import React, { Component } from 'react';
import styled from 'styled-components';
import CoordinatorCards from '../components/Card/CoordinatorCards';
import Navigation from '../components/Navigation/Navigation';

class CoordinatorHomeView extends Component {
  state = {};
  render() {
    return (
      <StyledCoordinatorHomeView>
        <Navigation />
        <Container>
          <PageHeading>My Stories</PageHeading>
          <CoordinatorCards />
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
