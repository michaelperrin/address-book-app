import { useReducer } from 'react';
import { DEFAULT_SETTINGS } from '../constants/settings';

const useSettings = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_LOCALES':
        return {
          ...state,
          locales: action.locales,
        };
      default:
        throw new Error();
    }
  };

  const [settings, dispatch] = useReducer(reducer, DEFAULT_SETTINGS);

  const handleLocaleChange = (locales) => {
    dispatch({ type: 'SET_LOCALES', locales });
  };

  return {
    settings,
    handleLocaleChange,
  };
};

export default useSettings;
