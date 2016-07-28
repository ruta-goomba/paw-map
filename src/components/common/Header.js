import React, {PropTypes} from 'react';
import { IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="header">
      <IndexLink to="/" className="header__title">WhatheMap</IndexLink>
      <p>Visualise locational information</p>
    </nav>
  );
};

export default Header;
