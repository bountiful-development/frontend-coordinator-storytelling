import React, { Component } from 'react';
import CoordinatorCard from './CoordinatorCard';
import AddStoryCard from './AddStoryCard';
import { CardContainer } from './Card';

class CoordinatorCards extends Component {
  state = {};
  render() {
    return (
      <CardContainer>
        <AddStoryCard />
        <CoordinatorCard
          title="Well Well Well ok"
          excerpt={
            'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
          }
          country="brazil"
        />
        <CoordinatorCard
          title="Well Well Well ok"
          excerpt={
            'Spicy jalapeno bacon ipsum dolor amet ground round And around...'
          }
          country="brazil"
        />
      </CardContainer>
    );
  }
}

export default CoordinatorCards;
