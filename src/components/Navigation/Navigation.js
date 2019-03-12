import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const Navigation = () => {
  return (
    <AppHeader>
      <Container>
        <AppHeading>
          <img src={logo} alt="logo" />
          Coordinator <span>Storytelling</span>
        </AppHeading>
        <LoginNav>
          <Link to="/login">Login</Link> | <Link to="/register">Sign Up</Link>
        </LoginNav>
      </Container>
    </AppHeader>
  );
};

const AppHeader = styled.header`
  background: #fff;
  height: 80px;
  border-bottom: 1px solid #e6e6e6;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1196px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .home-link {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const LoginNav = styled.nav`
  a,
  a:visited {
    color: #39393a;
    text-transform: uppercase;
    transition: all 0.2s;
    text-decoration: none;
    &:hover {
      color: #ed9728;
    }
  }
`;

const AppHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
  }
  img {
    height: 68px;
    width: 68px;
  }
`;

export default Navigation;
