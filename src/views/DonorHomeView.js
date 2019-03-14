import React, { Component } from 'react';
import styled from 'styled-components';
import CountryFilter from '../components/Donor/CountryFilter/CountryFilter';
import DonorCards from '../components/Card/DonorCards';
import Navigation from '../components/Navigation/Navigation';

class DonorHomeView extends Component {
  componentDidMount() {
    if (!this.props.stories.length) {
      this.props.getStories();
    }
  }

  filterCountries = country => {
    this.props.filterStoriesByCountry(country);
  };

  redirectToStory = id => {
    this.props.history.push(`/${id}`);
  };

  render() {
    return (
      <StyledDonorHomeView>
        <Navigation />
        <CountryFilter filterCountries={this.filterCountries} />
        <Container>
          <PageHeading>Our Stories</PageHeading>
          <DonorCards
            stories={this.props.stories}
            redirectToStory={this.redirectToStory}
          />
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
