import {
  GET_STORIES,
  GET_STORIES_FAILURE,
  GET_STORIES_SUCCESS,
  FILTER_STORIES
} from '../actions';

const initalState = {
  isFetchingStories: false,
  isFetchingStory: false,
  stories: [],
  visibleStories: [],
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
        visibleStories: [...state.stories, ...action.payload],
        isFetchingStories: false
      };
    case GET_STORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingStories: false
      };
    case FILTER_STORIES:
      let filtered;
      if (action.payload === 'all') {
        filtered = [...state.stories];
      } else {
        filtered = state.stories.filter(
          story => story.story_country === action.payload
        );
      }
      return {
        ...state,
        visibleStories: [...filtered]
      };
    default:
      return state;
  }
};
