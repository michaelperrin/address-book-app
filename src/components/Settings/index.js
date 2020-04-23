import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { AVAILABLE_LOCALES } from '../../constants/settings';
import SettingsContext from '../../context/SettingsContext';

const Settings = () => {
  const settingsContext = useContext(SettingsContext);

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="back-link">
        <Link to="/">‹ Back to user list</Link>
      </div>

      <div>
        <label htmlFor="nationalities">
          Nationalities
        </label>

        {
          /*
            * Beware that the React Select library currently raises some warnings
            * as we are using the strict mode of React.
            * See https://github.com/JedWatson/react-select/issues/3720#issuecomment-616069515
            */
        }
        <Select
          inputId="nationalities"
          isMulti
          value={settingsContext.settings.locales}
          onChange={(locales) => { settingsContext.handleLocaleChange(locales); }}
          options={AVAILABLE_LOCALES}
        />
      </div>
    </div>
  );
};

export default Settings;
