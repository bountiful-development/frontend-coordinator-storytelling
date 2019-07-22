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
            author={story.username}
            country={story.story_country.toLowerCase()}
            redirectToStory={this.props.redirectToStory}
            id={story.id}
            key={story.id}
          />
        ))}
      </CardContainer>
    );
  }
}

export default DonorCards;
