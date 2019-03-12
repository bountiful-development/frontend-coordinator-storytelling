import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <h1>
          Login <span>As A Coordinator</span>
        </h1>
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
        <button type="submit">Log In</button>
        <div>
          <span>Not registered?</span>
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
