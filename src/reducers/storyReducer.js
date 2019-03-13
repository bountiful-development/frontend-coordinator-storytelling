import {
  GET_STORIES,
  GET_STORIES_FAILURE,
  GET_STORIES_SUCCESS
} from '../actions';

const initalState = {
  isFetchingStories: false,
  isFetchingStory: false,
  stories: [],
  message: '',
  error: null
};

export const storyReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_STORIES:
      return {
        ...state,
        isFetchingStories: true
      };
    case GET_STORIES_SUCCESS:
      return {
        ...state,
        stories: [...state.stories, ...action.payload],
        isFetchingStories: false
      };
    case GET_STORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingStories: false
      };
    default:
      return state;
  }
};
