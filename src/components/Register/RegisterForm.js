import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg';
import { Form, Redirect, SubmitButton } from '../Form/Form';
// import FormGroupInput from '../Form/FormGroupInput';

const countries = [
  'Bolivia',
  'Brazil',
  'Cambodia',
  'Colombia',
  'Ecuador',
  'El Salvador',
  'Ghana',
  'Guatemala',
  'Haiti',
  'Honduras',
  'Kiribati',
  'Madagascar',
  'Mongolia',
  'Nicaragua',
  'Paraguay',
  'Peru',
  'Philippines',
  'Sierra Leone',
  'Zimbabwe'
];

class RegisterForm extends Component {
  state = {
    name: '',
    country: '',
    title: '',
    email: '',
    password: '',
    role: 'coordinator'
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, country, title, email, password } = this.state;
    return (
      <Form>
        <RegisterHeading>
          <img src={logo} alt="logo" />
          <span className="text">
            Sign Up <span>As A Coordinator</span>
          </span>
        </RegisterHeading>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Country:</label>
          <select
            name="country"
            id="country"
            value={country}
            onChange={this.handleChange}
          >
            {countries.map(country => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleChange}
            required
          />
        </div>
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
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <Redirect>
          <span>Already signed up?</span>
          <Link to="/login">Login</Link>
        </Redirect>
      </Form>
    );
  }
}

const RegisterHeading = styled.h1`
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
    font-size: 3.6rem;
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
