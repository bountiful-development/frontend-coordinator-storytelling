import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import Navigation from '../components/Navigation/Navigation';

class DonorHomeView extends Component {
  state = {};
  render() {
    return (
      <StyledDonorHomeView>
        <Navigation />
        <Container>
          <PageHeading>Our Stories</PageHeading>
          <CardContainer>
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="brazil"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="bolivia"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="cambodia"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="colombia"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="ecuador"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="el salvador"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="ghana"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="guatemala"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="haiti"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="honduras"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="madagascar"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="mongolia"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="nicaragua"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="paraguay"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="peru"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="philippines"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="sierra leone"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="zimbabwe"
            />
            <Card
              title="Well Well Well ok"
              excerpt={
                'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
              }
              author="Doug"
              country="kiribati"
            />
          </CardContainer>
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

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export default DonorHomeView;
