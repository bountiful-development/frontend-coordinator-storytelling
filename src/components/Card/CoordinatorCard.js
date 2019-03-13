import React from 'react';
// import styled from 'styled-components';
import Icon from '../../utilities/Icon';
import { Card, ViewButton } from './Card';

const CoordinatorCard = ({ title, excerpt, country }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <Icon name={country} />
      <p>{excerpt}</p>
      <div className="card-footer">
        <ViewButton>Edit</ViewButton>
        <ViewButton>Delete</ViewButton>
      </div>
    </Card>
  );
};

export default CoordinatorCard;
