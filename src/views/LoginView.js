import React, { Component } from 'react';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';

class LoginView extends Component {
  render() {
    return (
      <StyledLoginView>
        <h1>Donor Homepage</h1>
        <LoginForm />
      </StyledLoginView>
    );
  }
}

const StyledLoginView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default LoginView;
