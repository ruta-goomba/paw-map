import React, {PropTypes} from 'react';

const ButtonGroup = ({values, selected, onButtonClick}) => {
  return (
    <div className="section__button-group">
      {values.map(value =>
        <button key={value}
                className={(selected===value) ? 'btn-primary' : 'btn-default'}
                onClick={onButtonClick}
                value={value}
        >{value.replace(/-/g, ' ')}</button>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  values: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default ButtonGroup;
