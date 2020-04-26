import { LOAD_NEXT_PAGE, RESET_USER_SEARCH } from '../constants/action-types';
import { isLastPage } from '../utils/user';

const INITIAL_STATE = {
  users: [],
  nextUsers: [],
  currentPage: 1,
  hasLoaded: false,
  hasMore: true,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_NEXT_PAGE:
      return {
        ...state,
        users: [...state.users, ...action.users],
        nextUsers: action.nextUsers,
        currentPage: state.currentPage + 1,
        hasMore: !isLastPage(state.currentPage),
        hasLoaded: true,
      };

    case RESET_USER_SEARCH:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default users;
