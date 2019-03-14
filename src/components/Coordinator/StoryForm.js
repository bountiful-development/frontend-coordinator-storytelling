import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from '../Form/Form';
import { ViewButton } from '../Card/Card';

class StoryForm extends Component {
  state = { title: '', story: '' };
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { title, story } = this.state;
    return (
      <AddStoryForm>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="story">Story:</label>
          <textarea
            name="story"
            id="story"
            value={story}
            onChange={this.handleChange}
          />
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
