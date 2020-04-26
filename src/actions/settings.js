import { SET_LOCALES } from '../constants/action-types';

export const setLocales = (locales) => ({
  type: SET_LOCALES,
  locales,
});
