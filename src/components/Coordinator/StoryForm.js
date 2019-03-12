import React, { useState } from 'react';

const StoryForm = () => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');

  function setValue(value) {}
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={() => setValue}
        />
      </div>
      <div>
        <label htmlFor="story">Story:</label>
        <textarea name="story" id="story" />
      </div>
      <button type="submit">Add Story</button>
    </form>
  );
};

export default StoryForm;
