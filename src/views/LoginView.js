import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';
import Icon from '../utilities/Icon';

class LoginView extends Component {
  render() {
    return (
      <StyledLoginView>
        <Container>
          <Link to="/" className="home-link">
            <Icon name="home" />
            {/* <h2>Donor Homepage</h2> */}
          </Link>
          <LoginForm
            loginUser={this.props.loginUser}
            isLogginIn={this.props.isLogginIn}
          />
        </Container>
      </StyledLoginView>
    );
  }
}

const StyledLoginView = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    to left,
    #ed9728 0%,
    #ed9728 50%,
    #ed9728 50%,
    white 50%,
    white 100%
  );
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .home-link {
    position: absolute;
    top: 10px;
    left: 0;
    display: flex;
    align-items: center;
    /* height: 50px; */
    text-decoration: none;
    h2 {
      text-transform: uppercase;
      font-weight: 700;
      color: #39393a;
    }
    svg {
      height: 30px;
      width: 30px;
      margin-right: 1rem;
      fill: #39393a;
      transition: all 0.2s;
      &:hover {
        fill: #ed9728;
      }
    }
  }
`;

export default LoginView;
