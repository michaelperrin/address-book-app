import React from 'react';
import PropTypes from 'prop-types';
import SettingsContext from './SettingsContext';
import useSettings from '../hooks/useSettings';

const SettingsStore = ({ children }) => {
  const settings = useSettings();

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsStore.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SettingsStore;
