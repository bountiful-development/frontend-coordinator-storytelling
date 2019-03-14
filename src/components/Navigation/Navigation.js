import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const NavCheck = () => {
  const [toggle, setToggle] = useState(false);
  if (localStorage.getItem('token')) {
    const curemail = localStorage.getItem('curemail');
    return (
      <LoginNav>
        <Link to="/coordinator">{curemail}</Link>
        <div onClick={() => setToggle(!toggle)} className="toggle">
          V
        </div>

        {toggle && (
          <div className="nav">
            <Link class="dropdown" to="/coordinator/create-story">
              Create Story
            </Link>
            <Link class="dropdown" to="/">
              All Stories
            </Link>
            <Link class="dropdown" to="/">
              Logout
            </Link>
          </div>
        )}
        {/* <Link to="/coordinator/create-story">Create Story</Link> | Log Out */}
      </LoginNav>
    );
  } else {
    return (
      <LoginNav>
        <Link to="/login">Login</Link> | <Link to="/register">Sign Up</Link>
      </LoginNav>
    );
  }
};

const Navigation = () => {
  return (
    <AppHeader>
      <Container>
        <AppHeading>
          <img src={logo} alt="logo" />
          Coordinator <span>Storytelling</span>
        </AppHeading>
        {NavCheck()}
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
  position: relative;
  display: flex;

  .toggle {
    margin: 0 3rem;
    cursor: pointer;
  }
  .nav {
    background: rgba(57, 57, 57, 0.8);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 52px;
    right: 0;
    z-index: 1000;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

    .dropdown {
      font-size: 1.6rem;
      padding: 2rem;
      width: 100%;
      color: #fff;
      &:not(:last-child) {
        border-bottom: 1px solid rgba(57, 57, 57, 1);
      }
    }
  }
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
