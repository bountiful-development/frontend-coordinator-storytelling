import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterForm from '../components/Register/RegisterForm';
import Icon from '../utilities/Icon';

class RegisterView extends Component {
  render() {
    return (
      <StyledRegisterView>
        <Container>
          <Link to="/" className="home-link">
            <Icon name="home" />
            {/* <h2>Donor Homepage</h2> */}
          </Link>
          <RegisterForm
            registerUser={this.props.registerUser}
            isRegistering={this.props.isRegistering}
          />
        </Container>
      </StyledRegisterView>
    );
  }
}

const StyledRegisterView = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to left,
    #85ffc7 0%,
    #85ffc7 50%,
    #85ffc7 50%,
    white 50%,
    white 100%
  ); /* W3C */
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .home-link {
    position: absolute;
    top: 10px;
    left: 0;
    display: flex;
    align-items: center;
    /* height: 50px; */
    text-decoration: none;
    h2 {
      text-transform: uppercase;
      font-weight: 700;
      color: #39393a;
    }
    svg {
      height: 30px;
      width: 30px;
      margin-right: 1rem;
      fill: #39393a;
      transition: all 0.2s;
      &:hover {
        fill: #ed9728;
      }
    }
  }
`;

export default RegisterView;
