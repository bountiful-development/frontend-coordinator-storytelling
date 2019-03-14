import React from 'react';
// import styled from 'styled-components';
import Icon from '../../utilities/Icon';
import { Card, ViewButton } from './Card';

const DonorCard = ({
  id,
  title,
  excerpt,
  author,
  country,
  redirectToStory
}) => {
  return (
    <Card>
      <h3>{country}</h3>
      <Icon name={country} />
      <h4>{title}</h4>
      <p>{excerpt}</p>
      <div className="card-footer">
        <p>by: {author}</p>
        <ViewButton onClick={() => redirectToStory(id)}>View</ViewButton>
      </div>
    </Card>
  );
};

export default DonorCard;
