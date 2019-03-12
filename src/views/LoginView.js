import React, { Component } from 'react';
import LoginForm from '../components/Login/LoginForm';

class LoginView extends Component {
  render() {
    return (
      <div>
        <h1>Donor Homepage</h1>
        <LoginForm />
      </div>
    );
  }
}

export default LoginView;
