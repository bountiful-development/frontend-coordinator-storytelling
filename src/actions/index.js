import Axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const USER_REGISTERED = 'USER_REGISTERED';
export const LOGIN_USER = 'LOGIN_USER';
export const USER_LOGIN = 'USER_LOGIN';

// Stories
export const GET_STORIES = 'GET_STORIES';
export const GET_STORIES_SUCCESS = 'GET_STORIES_SUCCESS';
export const GET_STORIES_FAILURE = 'GET_STORIES_FAILURE';

export const GET_USER_STORIES = 'GET_USER_STORIES';
export const USER_STORIES_GOT = 'USER_STORIES_GOT';

// Story
export const GET_STORY = 'GET_STORY';
export const GET_STORY_SUCCESS = 'GET_STORY_SUCCESS';
export const GET_STORY_FAILURE = 'GET_STORY_FAILURE';

export const EDIT_STORY = 'EDIT_STORY';
export const EDIT_STORY_SUCCESS = 'EDIT_STORY_SUCCESS';
export const EDIT_STORY_FAILURE = 'EDIT_STORY_FAILURE';

export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS';
export const DELETE_STORY_FAILURE = 'DELETE_STORY_FAILURE';

export const FILTER_STORIES = 'FILTER_STORIES';

export const ADD_STORY = 'ADD_STORY';
export const STORY_ADD = 'STORY_ADD';

export const registerUser = newUser => dispatch => {
  console.log('Registering');
  dispatch({ type: REGISTER_USER });
  Axios.post(
    'https://coordinator-storytelling-api.herokuapp.com/api/register/',
    newUser
  )
    .then(res => {
      dispatch({ type: USER_REGISTERED, payload: res.data });
    })
    .catch(err => console.log(err.response));
};

export const loginUser = user => dispatch => {
  dispatch({ type: LOGIN_USER });
  Axios.post(
    'https://coordinator-storytelling-api.herokuapp.com/api/login/',
    user
  )
    .then(res => {
      dispatch({ type: USER_LOGIN, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const getStories = () => dispatch => {
  dispatch({ type: GET_STORIES });
  Axios.get('https://coordinator-storytelling-api.herokuapp.com/api/stories/')
    .then(res => {
      dispatch({ type: GET_STORIES_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const getUserStories = curid => dispatch => {
  dispatch({ type: GET_USER_STORIES });
  Axios.get(
    'https://coordinator-storytelling-api.herokuapp.com/api/stories/users/curid'
  )
    .then(res => {
      dispatch({ type: USER_STORIES_GOT, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const filterStoriesByCountry = country => {
  return {
    type: FILTER_STORIES,
    payload: country
  };
};

export const addStory = (data, jwt) => dispatch => {
  dispatch({ type: ADD_STORY });
  Axios.post(
    `https://coordinator-storytelling-api.herokuapp.com/api/stories/`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: jwt
      }
    }
  )
    .then(res => {
      dispatch({ type: STORY_ADD, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const getStory = id => dispatch => {
  dispatch({ type: GET_STORIES });
  Axios.get(
    `https://coordinator-storytelling-api.herokuapp.com/api/stories/${id}`
  )
    .then(res => {
      dispatch({ type: GET_STORY_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
