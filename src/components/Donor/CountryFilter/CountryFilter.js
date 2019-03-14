import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../../../utilities/Icon';

const countries = [
  'bolivia',
  'brazil',
  'cambodia',
  'colombia',
  'ecuador',
  'el salvador',
  'ghana',
  'guatemala',
  'haiti',
  'honduras',
  'kiribati',
  'madagascar',
  'mongolia',
  'nicaragua',
  'paraguay',
  'peru',
  'philippines',
  'sierra leone',
  'zimbabwe'
];

class CountryFilter extends Component {
  state = {};
  render() {
    return (
      <StyledCountryFilter>
        <Container>
          {countries.map(country => {
            return (
              <div className="country-container" key={country}>
                <Icon name={country} />
                <p>{country}</p>
              </div>
            );
          })}
        </Container>
      </StyledCountryFilter>
    );
  }
}

const StyledCountryFilter = styled.nav`
  height: 135px;
  background: #39393a;
  h1 {
    color: #fff;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  .country-container {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      height: 100%;
      color: #fff;
      /* background: #fff; */
      fill: #fff;
    }
    p {
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`;

export default CountryFilter;
