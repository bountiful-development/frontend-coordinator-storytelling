import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CoordinatorCard from './CoordinatorCard';
import AddStoryCard from './AddStoryCard';
import { CardContainer } from './Card';

class CoordinatorCards extends Component {
  state = {};

  render() {
    return (
      <CardContainer>
        <Link to="/coordinator/create-story">
        <AddStoryCard />
        </Link>
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
