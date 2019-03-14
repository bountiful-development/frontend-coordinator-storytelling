import React from 'react';
import styled from 'styled-components';
// import Icon from '../../utilities/Icon';
import { Link } from 'react-router-dom';
import { Card } from './Card';

const AddStoryCard = () => {
  return (
    <AddCard>
      <Link to="/coordinator/create-story">
        <h3>ADD NEW</h3>
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="115" width="20" height="250" fill="#E6E6E6" />
          <rect
            x="250"
            y="115"
            width="20"
            height="250"
            transform="rotate(90 250 115)"
            fill="#E6E6E6"
          />
        </svg>
      </Link>
    </AddCard>
  );
};

const AddCard = styled(Card)`
  background: #fff;
  a {
    color: #39393a;
  }
  h3 {
    margin-bottom: 4rem;
  }
`;

export default AddStoryCard;
