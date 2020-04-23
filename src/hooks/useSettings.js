import { useReducer } from 'react';
import { DEFAULT_SETTINGS } from '../constants/settings';

const useSettings = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOCALE':
        return {
          ...state,
          locale: action.locale,
        };
      default:
        throw new Error();
    }
  };

  const [settings, dispatch] = useReducer(reducer, DEFAULT_SETTINGS);

  const handleLocaleChange = (locale) => {
    console.log('locale', locale);
    dispatch({ type: 'SET_LOCALE', locale });
  };

  return {
    settings,
    handleLocaleChange,
  };
};

export default useSettings;
