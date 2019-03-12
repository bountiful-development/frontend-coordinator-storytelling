import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RegisterForm from '../components/Register/RegisterForm';

class RegisterView extends Component {
  render() {
    return (
      <StyledRegisterView>
        <Container>
          <Link to="/" className="home-link">
            <h1>Donor Homepage</h1>
          </Link>
          <RegisterForm />
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
    top: 0;
    left: 0;
  }
`;

export default RegisterView;
