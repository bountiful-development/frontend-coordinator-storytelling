import React from 'react';
import styled from 'styled-components';
import Icon from '../../utilities/Icon';

const Card = ({ title, excerpt, author, country }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <Icon name={country} />
      <p>{excerpt}</p>
      <div className="card-footer">
        <p>by: {author}</p>
        <ViewButton>View</ViewButton>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 26%;
  overflow: hidden;
  /* background: #fff; */
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  margin-bottom: 6rem;
  background: linear-gradient(
    to top,
    #85ffc7 0%,
    #85ffc7 60%,
    #85ffc7 60%,
    white 60%,
    white 100%
  );

  &:nth-child(even) {
    background: linear-gradient(
      to top,
      #ed9728 0%,
      #ed9728 60%,
      #ed9728 60%,
      white 60%,
      white 100%
    );
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
    /* font-weight: 700; */
  }
  svg {
    align-self: center;
  }
  .card-footer {
    display: flex;
    align-items: center;
    p {
      margin-bottom: 0;
    }
  }
`;

const ViewButton = styled.button`
  background: #39393a;
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
  margin-left: auto;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #edaf5f;
  }
`;
export default Card;
