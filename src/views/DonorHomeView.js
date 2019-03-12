import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import styled from 'styled-components';
import brazil from '../img/brazil.svg';

class DonorHomeView extends Component {
  state = {};
  render() {
    return (
      <StyledDonorHomeView>
        <Navigation />
        <Container>
          <PageHeading>Our Stories</PageHeading>
          <CardContainer>
            <Card>
              <h3>A new thing to say</h3>
              <img src={brazil} alt="brazil" />
              <p>
                Spicy jalapeno bacon ipsum dolor amet ground round And around...{' '}
              </p>
              <div className="card-footer">
                <p>by: Gary</p>
                <ViewButton>View</ViewButton>
              </div>
            </Card>
            <Card>
              <h3>Water is flowing</h3>
              <img src={brazil} alt="brazil" />
              <p>
                Spicy jalapeno bacon ipsum dolor amet ground round And around...{' '}
              </p>
              <div className="card-footer">
                <p>by: Larry</p>
                <ViewButton>View</ViewButton>
              </div>
            </Card>
            <Card>
              <h3>New Orphanage</h3>
              <img src={brazil} alt="brazil" />
              <p>
                Spicy jalapeno bacon ipsum dolor amet ground round And around...{' '}
              </p>
              <div className="card-footer">
                <p>by: Caren</p>
                <ViewButton>View</ViewButton>
              </div>
            </Card>
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

const Card = styled.div`
  width: 26%;
  overflow: hidden;
  /* background: #fff; */
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  margin-bottom: 3rem;
  background: linear-gradient(
    to top,
    #85ffc7 0%,
    #85ffc7 60%,
    #85ffc7 60%,
    white 60%,
    white 100%
  );

  &:nth-child(even) {
    background: linear-gradient(
      to top,
      #ed9728 0%,
      #ed9728 60%,
      #ed9728 60%,
      white 60%,
      white 100%
    );
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
    /* font-weight: 700; */
  }
  .card-footer {
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0;
    }
  }
`;

const ViewButton = styled.button`
  background: #39393a;
  font-size: inherit;
  padding: 1rem 1.5rem;
  display: flex;
  text-transform: uppercase;
  font-family: inherit;
  color: #fff;
  font-weight: 700;
  border: transparent;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  margin-left: auto;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #edaf5f;
  }
`;

export default DonorHomeView;
