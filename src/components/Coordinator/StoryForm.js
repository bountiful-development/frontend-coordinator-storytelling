import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from '../Form/Form';
import { ViewButton } from '../Card/Card';

class StoryForm extends Component {
  state = { title: '', story: '' };

  componentDidMount() {
    if (this.props.story) {
      this.setState({
        title: this.props.story.story_title,
        story: this.props.story.story_description
      });
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleAdd(e) {
    e.preventDefault();
    const jwts = localStorage.getItem('token');
    let dataPack = {
      story_title: this.state.title,
      story_description: this.state.story,
      jwt: jwts
    };
    if (this.props.story) {
      this.props.editStory(this.props.story.id, dataPack);
    } else {
      this.props.addStory(dataPack);
    }
    this.setState({
      title: '',
      story: ''
    });
  }

  render() {
    const { title, story } = this.state;
    return (
      <AddStoryForm onSubmit={e => this.handleAdd(e)}>
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
