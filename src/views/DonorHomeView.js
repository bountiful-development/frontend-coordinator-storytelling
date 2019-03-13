import React, { Component } from 'react';
import styled from 'styled-components';
import DonorCards from '../components/Card/DonorCards';
import Navigation from '../components/Navigation/Navigation';

class DonorHomeView extends Component {
  state = {};
  render() {
    return (
      <StyledDonorHomeView>
        <Navigation />
        <Container>
          <PageHeading>Our Stories</PageHeading>
          <DonorCards />
        </Container>
      </StyledDonorHomeView>
    );
  }
}

const StyledDonorHomeView = styled.div`
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

export default DonorHomeView;
