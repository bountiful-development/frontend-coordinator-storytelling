import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from '../../../utilities/Icon';

const countries = [
  'all',
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
  state = { scrollVal: 0 };
  handleStoryFilter = country => {
    console.log(country);
    this.props.filterCountries(country);
  };

  scrollRight = () => {
    if (this.state.scrollVal > -1000) {
      this.setState(prevState => ({ scrollVal: prevState.scrollVal - 250 }));
      console.log(this.state.scrollVal);
    }
  };
  scrollLeft = () => {
    if (this.state.scrollVal < 0) {
      this.setState(prevState => ({ scrollVal: prevState.scrollVal + 250 }));
      console.log(this.state.scrollVal);
    }
  };

  render() {
    const { scrollVal } = this.state;
    return (
      <StyledCountryFilter>
        <Container scroll={scrollVal}>
          <div className="left-arrow" onClick={this.scrollLeft}>
            {'<'}
          </div>
          <div className="right-arrow" onClick={this.scrollRight}>
            {'>'}
          </div>
          <div className="scroll-container">
            {countries.map(country => {
              return (
                <div
                  className="country-container"
                  key={country}
                  onClick={() => this.handleStoryFilter(country)}
                >
                  <Icon name={country} />
                  <p>{country}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </StyledCountryFilter>
    );
  }
}

const StyledCountryFilter = styled.nav`
  height: 135px;
  /* width: 135px; */
  position: relative;
  background: #39393a;
  h1 {
    color: #fff;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.2s;
  /* transform: ${scroll => `translate3d(${scroll.scroll}px, 0, 0)`}; */

  .left-arrow,
  .right-arrow {
    color: #fff;
    font-size: 3rem;
    position: absolute;
    cursor: pointer;
  }
  .left-arrow {
    left: 0;
  }
  .right-arrow {
    right: 0;
  }
  .scroll-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    transition: all 0.2s;
    transform: ${scroll => `translate3d(${scroll.scroll}px, 0, 0)`};
    .country-container {
      height: 100px;
      min-width: 100px;
      /* border: 1px solid white; */
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s;

      svg {
        height: 100%;
        width: 100%;
        color: #fff;
        margin-bottom: 1rem;
        /* background: #fff; */
        fill: #fff;
        transition: all 0.2s;
        &:hover {
          fill: #ed9728;
        }
      }
      p {
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }
`;

export default CountryFilter;
