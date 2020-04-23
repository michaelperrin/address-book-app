import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as GearIcon } from './images/gear.svg';

const SettingsLink = () => (
  <div className="settings-link">
    <Link to="/settings">
      <GearIcon alt="Settings" />
    </Link>
  </div>
);

export default SettingsLink;
