import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from '../Form/Form';
import { ViewButton } from '../Card/Card';

class StoryForm extends Component {
  render() {
    return (
      <AddStoryForm>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="story">Story:</label>
          <textarea name="story" id="story" />
        </div>
        <ViewButton type="submit">Add Story</ViewButton>
      </AddStoryForm>
    );
  }
}

const AddStoryForm = styled(Form)`
  box-shadow: none;
  width: 80%;
  margin: 0 auto;
  background: none;

  input,
  textarea {
    background: #fff;
  }
  textarea {
    height: 300px;
  }

  button {
    background: #ff8552;
  }
`;

export default StoryForm;
