import {
  GET_STORIES,
  GET_STORIES_FAILURE,
  GET_STORIES_SUCCESS,
  GET_STORY,
  GET_STORY_SUCCESS,
  GET_STORY_FAILURE,
  FILTER_STORIES,
  ADD_STORY,
  STORY_ADD
} from '../actions';

const initalState = {
  isFetchingStories: false,
  isFetchingStory: false,
  isAddingStory: false,
  stories: [],
  story: {},
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
    case GET_STORY:
      return {
        ...state,
        isFetchingStory: true
      };
    case GET_STORY_SUCCESS:
      return {
        ...state,
        story: { ...action.payload },
        isFetchingStory: false
      };
    case GET_STORY_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingStory: false
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
    case ADD_STORY:
      return {
        ...state,
        isAddingStory: true
      };
    case STORY_ADD:
      return {
        ...state,
        isAddingStory: false
      };
    default:
      return state;
  }
};
