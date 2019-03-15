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
        {this.props.userstories.map(story => (
          <CoordinatorCard
            title={story.story_title}
            excerpt={story.story_description.substring(0, 100) + '...'}
            country={story.story_country}
          />
        ))}
      </CardContainer>
    );
  }
}

export default CoordinatorCards;
