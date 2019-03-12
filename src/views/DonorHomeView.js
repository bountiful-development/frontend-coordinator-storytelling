import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DonorHomeView extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/register">register</Link>
        <Link to="/login">login</Link>
      </div>
    );
  }
}

export default DonorHomeView;
