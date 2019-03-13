import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg';
import { Form, RedirectA, SubmitButton } from '../Form/Form';
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

  componentDidUpdate(){
    const token = localStorage.getItem('token');
    if(token){
      {console.log('RUN')}
      return (
        this.props.history.push('/')
      )
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleRegister(e) {
    e.preventDefault();
    let newUser = {
      username: this.state.name,
      country: this.state.country,
      title: this.state.title,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }
    if(newUser.country === ''){
      newUser.country = 'Bolivia';
    }
    console.log(newUser);
    this.props.registerUser(newUser);
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(user);
    this.setState({
      name: '',
      country: '',
      title: '',
      email: '',
      password: '',
      role: 'coordinator'
    })
  }

  render() {
    const { name, country, title, email, password } = this.state;
    return (
      <Form onSubmit={e => this.handleRegister(e)}>
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
        <RedirectA>
          <span>Already signed up?</span>
          <Link to="/login">Login</Link>
        </RedirectA>
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

export default withRouter(RegisterForm);
