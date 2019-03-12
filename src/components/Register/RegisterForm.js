import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, country, title, email, password } = this.state;
    return (
      <form>
        <h1>
          Sign Up <span>As A Coordinator</span>
        </h1>
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
        <button type="submit">Sign Up</button>
        <div>
          <span>Already signed up?</span>
          <Link to="/login">Login</Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
