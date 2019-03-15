import React from 'react';
// import styled from 'styled-components';
import Icon from '../../utilities/Icon';
import { Card, ViewButton } from './Card';

const CoordinatorCard = ({
  title,
  excerpt,
  country,
  deleteStory,
  id,
  getStory
}) => {
  return (
    <Card>
      <h3>{title}</h3>
      <Icon name={country} />
      <p>{excerpt}</p>
      <div className="card-footer">
        <ViewButton onClick={() => getStory(id)}>Edit</ViewButton>
        <ViewButton onClick={() => deleteStory(id)}>Delete</ViewButton>
      </div>
    </Card>
  );
};

export default CoordinatorCard;
