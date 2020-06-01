import { LOAD_NEXT_PAGE, RESET_USER_SEARCH, REQUEST_NEXT_PAGE } from '../constants/action-types';
import { isLastPage } from '../utils/user';

const INITIAL_STATE = {
  users: [],
  nextUsers: [],
  currentPage: 1,
  isLoading: false,
  hasMore: true,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_NEXT_PAGE:
      return {
        ...state,
        isLoading: true,
      };

    case LOAD_NEXT_PAGE:
      return {
        ...state,
        users: [...state.users, ...action.users],
        nextUsers: action.nextUsers,
        currentPage: state.currentPage + 1,
        hasMore: !isLastPage(state.currentPage),
        isLoading: false,
      };

    case RESET_USER_SEARCH:
      return {
        ...state,
        users: [],
        nextUsers: [],
        currentPage: 1,
        hasMore: true,
      };

    default:
      return state;
  }
};

export default users;
