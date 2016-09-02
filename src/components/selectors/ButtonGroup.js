import React, {PropTypes} from 'react';

const ButtonGroup = ({values, selected, selectedGroup, onButtonClick}) => {
  if (selected){
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
  } else {
    return (
      <div className="section__button-group">
        {values.map(value =>
          <button key={value}
                  className={(selectedGroup.indexOf(value) !== -1) ? 'btn-primary' : 'btn-default'}
                  onClick={onButtonClick}
                  value={value}
          >{value.replace(/-/g, ' ')}</button>
        )}
      </div>
    );
  }
};

ButtonGroup.propTypes = {
  values: PropTypes.array.isRequired,
  selected: PropTypes.string,
  selectedGroup: PropTypes.array,
  onButtonClick: PropTypes.func
};

export default ButtonGroup;
