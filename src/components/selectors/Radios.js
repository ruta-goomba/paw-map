import React, {PropTypes} from 'react';

const Radios = ({categories, selected, onRadioChange}) => {
  return (
    <div className="section__form--radios">
      <form>
        {categories.map(category =>
          <div key={category} className="section__form--radio">
            <input type="radio"
                   checked={(selected===category) ? 'checked' : ''}
                   onChange={onRadioChange}
                   value={category}
            />
            <label>{category}</label>
          </div>
        )}
      </form>
    </div>
  );
};

Radios.propTypes = {
  categories: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onRadioChange: PropTypes.func
};

export default Radios;

