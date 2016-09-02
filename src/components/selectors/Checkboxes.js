import React, {PropTypes} from 'react';

const Checkboxes = ({categories, selected, onCheckboxChange}) => {
  return (
    <div className="section__form--checkboxes">
      <form>
        {categories.map(category =>
          <div key={category} className="section__form--checkbox">
            <input type="checkbox"
                   checked={(selected.indexOf(category) > -1) ? 'checked' : ''}
                   onChange={onCheckboxChange}
                   value={category}
            />
            <label>{category.replace(/-/g, ' ')}</label>
          </div>
        )}
      </form>
    </div>
  );
};

Checkboxes.propTypes = {
  categories: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  onCheckboxChange: PropTypes.func
};

export default Checkboxes;
