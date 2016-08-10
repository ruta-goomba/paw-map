import React, {PropTypes} from 'react';

const BurgerMenu = ({toggleMenu}) => {
  return (
    <div className="burger-menu">
      <a onClick={toggleMenu}>&#9776; Show all categories</a>
    </div>
  );
};

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func
};

export default BurgerMenu;
