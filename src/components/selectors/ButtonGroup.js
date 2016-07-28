import React, {PropTypes} from 'react';

const ButtonGroup = ({dates, selected, onButtonClick}) => {
  return (
    <div className="section__button-group">
      {dates.map(date =>
        <button key={date}
                className={(selected===date) ? 'btn-primary' : 'btn-default'}
                onClick={onButtonClick}
                value={date}
        >{date}</button>
      )}
    </div>
  );
};

ButtonGroup.propTypes = {
  dates: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default ButtonGroup;
