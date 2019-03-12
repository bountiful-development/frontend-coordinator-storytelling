import React, { Component } from 'react';
import StoryForm from '../components/Coordinator/StoryForm';

class EditStoryView extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Edit Story</h1>
        <StoryForm />
      </div>
    );
  }
}

export default EditStoryView;
