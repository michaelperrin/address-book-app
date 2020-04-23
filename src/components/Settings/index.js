import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { AVAILABLE_LOCALES } from '../../constants/settings';
import SettingsContext from '../../context/SettingsContext';

const Settings = () => {
  const settings = useContext(SettingsContext);

  const options = AVAILABLE_LOCALES.map(
    (locale) => ({ value: locale, label: locale }),
  );

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <Link to="/">Settings</Link>

      {
        /*
         * Beware that the React Select library currently raises some warnings
         * as we are using the strict mode of React.
         * See https://github.com/JedWatson/react-select/issues/3720#issuecomment-616069515
         */
      }
      <Select
        // value={selectedOption}
        onChange={(locale) => { settings.handleLocaleChange(locale.value); }}
        options={options}
      />
    </div>
  );
};

export default Settings;
