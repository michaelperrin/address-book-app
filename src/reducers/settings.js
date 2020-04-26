import { DEFAULT_SETTINGS } from '../constants/settings';
import { SET_LOCALES } from '../constants/action-types';

const settings = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case SET_LOCALES:
      return {
        ...state,
        locales: action.locales,
      };
    default:
      return state;
  }
};

export default settings;
