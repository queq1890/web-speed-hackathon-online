import { ACTION_BLOG_FETCHED } from './blog_actions';

export function blogReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_BLOG_FETCHED: {
      return { ...state, ...action.data.blog };
    }

    default: {
      return state;
    }
  }
}
