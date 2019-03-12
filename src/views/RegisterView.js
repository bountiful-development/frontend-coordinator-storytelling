import React, { Component } from 'react';
import RegisterForm from '../components/Register/RegisterForm';

class RegisterView extends Component {
  render() {
    return (
      <div>
        <h1>Donor Homepage</h1>
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterView;
