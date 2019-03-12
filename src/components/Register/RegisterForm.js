import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg';
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
      <StyledRegisterForm>
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
      </StyledRegisterForm>
    );
  }
}

const StyledRegisterForm = styled.form`
  background: #fff;
  padding: 2rem 5rem;
  width: 600px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    label {
      text-transform: uppercase;
      font-weight: 700;
    }
    input,
    select {
      background: #fafafa;
      border-radius: 5px;
      padding: 1rem;
      font-size: inherit;
      width: 100%;
      border: 1px solid #e6e6e6;
      font-family: inherit;
      &:focus {
        outline: none;
        border: 1px solid #ed9728;
      }
    }

    select {
      height: 3.6rem;
    }
  }
`;

const SubmitButton = styled.button`
  background: #ed9728;
  font-size: inherit;
  padding: 1rem 1.5rem;
  display: flex;
  text-transform: uppercase;
  font-family: inherit;
  color: #fff;
  font-weight: 700;
  border: transparent;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #edaf5f;
  }
`;

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

const Redirect = styled.div`
  font-size: 1.4rem;
  text-align: center;
  a {
    margin-left: 8px;
    color: #ed9728;
  }
`;
export default RegisterForm;
