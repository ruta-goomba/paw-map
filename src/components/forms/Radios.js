import React, {PropTypes} from 'react';

const Radios = ({categories}) => {
  return (
    <div>
      <form>
        {categories.map(category =>
          <div key={category} className="section__form--radios">
            <input type="radio"/>
            <label>{category}</label>
          </div>
        )}
      </form>
    </div>
  );
};

Radios.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Radios;

