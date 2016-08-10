import React, {PropTypes} from 'react';

const Title = ({title}) => {
  return (
    <h2 className="section__content-title">
      {title.replace(/-/g, ' ')}
    </h2>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
