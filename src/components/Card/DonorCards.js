import React, { Component } from 'react';
import DonorCard from './DonorCard';
import { CardContainer } from './Card';

class DonorCards extends Component {
  state = {};
  render() {
    return (
      <CardContainer>
        {this.props.stories.map(story => (
          <DonorCard
            title={story.story_title}
            excerpt={story.story_description.substring(0, 100) + '...'}
            author="doug"
            country={story.story_country}
          />
        ))}
      </CardContainer>
    );
  }
}

export default DonorCards;
