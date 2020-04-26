import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { AVAILABLE_LOCALES } from '../../constants/settings';
import { setLocales } from '../../actions/settings';

const Settings = () => {
  const dispatch = useDispatch();
  const locales = useSelector((state) => state.settings.locales);

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
          value={locales}
          onChange={(newLocales) => { dispatch(setLocales(newLocales)); }}
          options={AVAILABLE_LOCALES}
        />
      </div>
    </div>
  );
};

export default Settings;
