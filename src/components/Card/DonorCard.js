import React from 'react';
// import styled from 'styled-components';
import Icon from '../../utilities/Icon';
import { Card, ViewButton } from './Card';

const DonorCard = ({ title, excerpt, author, country }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <Icon name={country} />
      <p>{excerpt}</p>
      <div className="card-footer">
        <p>by: {author}</p>
        <ViewButton>View</ViewButton>
      </div>
    </Card>
  );
};

export default DonorCard;
