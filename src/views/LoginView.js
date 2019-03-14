import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';

class LoginView extends Component {
  render() {
    return (
      <StyledLoginView>
        <Container>
          <Link to="/" className="home-link">
            <h1>Donor Homepage</h1>
          </Link>
          <LoginForm loginUser={this.props.loginUser} isLogginIn={this.props.isLogginIn} />
        </Container>
      </StyledLoginView>
    );
  }
}

const StyledLoginView = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to left,
    #ed9728 0%,
    #ed9728 50%,
    #ed9728 50%,
    white 50%,
    white 100%
  );
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

export default LoginView;
