import React, { Component } from 'react';
import StoryForm from '../components/Coordinator/StoryForm';

class CreateStoryView extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Create Story</h1>
        <StoryForm />
      </div>
    );
  }
}

export default CreateStoryView;
