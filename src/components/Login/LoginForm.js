import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg';
import { Form, Redirect, SubmitButton } from '../Form/Form';

class RegisterForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleLogin(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(user);
    this.props.loginUser(user);
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={e => this.handleLogin(e)}>
        <LoginHeading>
          <img src={logo} alt="logo" />
          <span className="text">
            Log In <span>As A Coordinator</span>
          </span>
        </LoginHeading>
        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
        </div>
        <SubmitButton type="submit">Log In</SubmitButton>
        <Redirect>
          <span>Not registered?</span>
          <Link to="/register">Sign Up</Link>
        </Redirect>
      </Form>
    );
  }
}

const LoginHeading = styled.h1`
  text-transform: uppercase;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 68px;
    height: 68px;
    /* margin-right: 2px; */
  }
  .text {
    font-size: 4.3rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    span {
      font-size: 1.5rem;
      font-weight: 400;
      /* width: 100%; */
    }
  }
`;

export default RegisterForm;
